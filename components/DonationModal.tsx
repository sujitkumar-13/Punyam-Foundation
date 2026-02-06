"use client";

import { useState, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendDonationAction } from "@/app/actions/send-donation";
import Scanner from "../app/scanner.png"
import { Copy, Check } from "lucide-react";

interface DonationModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

export const DonationModal = ({ isOpen, onOpenChange }: DonationModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const bankDetails = [
        { label: "Bank Name", value: "Canara Bank" },
        { label: "Account Holder", value: "Punyam Foundation" },
        { label: "Account Number", value: "120027223030" },
        { label: "IFSC Code", value: "CNRB0005664" },
    ];

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(label);
        toast.success(`${label} copied!`, { duration: 2000 });
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendDonationAction(formData);
            if (result.success) {
                toast.success("Thank you! Your donation proof has been submitted.");
                onOpenChange(false);
                setFileName(null);
            } else {
                toast.error(result.error || "Something went wrong.");
            }
        } catch (error) {
            toast.error("Failed to submit. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] p-0 overflow-hidden border-none shadow-2xl rounded-2xl bg-white">
                <DialogHeader className="p-4 border-b flex flex-row items-center justify-between">
                    <DialogTitle className="text-base font-bold text-center w-full">
                        Payment For <span className="text-blue-600">Punyam Foundation</span>
                    </DialogTitle>
                </DialogHeader>

                <div className="p-5 max-h-[85vh] overflow-y-auto custom-scrollbar">
                    {/* Bank Details Area */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3 mb-6">
                        {bankDetails.map((detail) => (
                            <div key={detail.label} className="flex items-center justify-between group">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{detail.label}:</span>
                                    <span className="text-xs text-slate-600 truncate">{detail.value}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => copyToClipboard(detail.value, detail.label)}
                                    className="p-1 hover:bg-white rounded transition-colors text-blue-500 shrink-0"
                                >
                                    {copiedField === detail.label ? (
                                        <Check size={14} className="text-green-500" />
                                    ) : (
                                        <Copy size={14} />
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* QR Code Section */}
                    <div className="text-center mb-6">
                        <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Scan & Pay</p>
                        <div className="inline-block bg-white border border-slate-100 rounded-xl shadow-sm mb-3">
                            <img
                                src={Scanner.src}
                                alt="QR Code"
                                className="w-32 h-32 mx-auto"
                            />
                        </div>
                        <div
                            onClick={() => copyToClipboard("323268845223030@cnrb", "UPI ID")}
                            className="flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 py-1.5 px-3 rounded-full transition-all mx-auto w-fit border border-dashed border-slate-300 hover:border-blue-400 group active:scale-95"
                        >
                            <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600">323268845223030@cnrb</span>
                            {copiedField === "UPI ID" ? (
                                <Check size={12} className="text-green-500" />
                            ) : (
                                <Copy size={12} className="text-slate-400 group-hover:text-blue-500" />
                            )}
                        </div>
                    </div>

                    {/* Simplified Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                            name="name"
                            placeholder="Your Name"
                            required
                            className="h-10 bg-slate-50 border-slate-200 text-sm focus-visible:ring-blue-500"
                        />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            required
                            className="h-10 bg-slate-50 border-slate-200 text-sm focus-visible:ring-blue-500"
                        />

                        <div className="space-y-1">
                            <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-tight ml-1">Upload Payment Screenshot</Label>
                            <div
                                className="h-10 px-3 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-between hover:bg-slate-50 cursor-pointer transition-colors"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <span className="text-xs text-slate-500 truncate">
                                    {fileName || "Choose File"}
                                </span>
                                <Upload size={14} className="text-slate-400" />
                                <input
                                    type="file"
                                    name="screenshot"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 rounded-lg transition-all mt-4 shadow-sm"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                "Submit Payment"
                            )}
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

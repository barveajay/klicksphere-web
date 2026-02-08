import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = async (data: { name: string; email: string; message: string }) => {
    setIsSubmitting(true);
    try {
      const { data: session } = await supabase.auth.getSession();

      const { error } = await supabase.from("contact_submissions").insert({
        name: data.name,
        email: data.email,
        message: data.message,
        user_id: session?.session?.user?.id || null,
      });

      if (error) throw error;
      toast.success("Message sent! We'll get back to you soon.");
      return true;
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitContact, isSubmitting };
};

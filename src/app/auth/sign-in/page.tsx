'use client'
import { signinAction } from "@/api/accounts/signin-action";
import { SubmitButton } from "@/components/ui/submit-button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Form from 'next/form';
import { useActionState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Signin() {
  const { toast } = useToast();

  const [message, formAction] = useActionState(signinAction, { success: true, text: 'Send to register' } );

  useEffect(() => {
    if (message) {
      if (message.success) {
        toast({ title: "Login bem-sucedido", description: message.text });
      } else {
        toast({ title: "Erro ao acessar", description: message.text  });
      }
    }
    return () => {}
  }, [message, toast]);

  return (
    <div className="p-8">
      <div className="w-[350px] flex flex-col justify-center gap-6">
        
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Access panel
          </h1>
          <p className="text-sm text-muted-foreground">
            Track your sales through the partner dashboard!
          </p>
        </div>

        <Form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" name="email"/>
          </div>

          <SubmitButton
            className="w-full" type="submit" pendingText="Accessing..." text="Acess Panel" />
        </Form>

      </div>
    </div>
  );
}

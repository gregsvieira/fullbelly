'use client'
import { signInAction } from "@/api/accounts/signin-action";
import { SubmitButton } from "@/components/ui/submit-button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import Form from 'next/form';
import { useActionState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const { toast } = useToast();

  const [message, formAction] = useActionState(signInAction, null);

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
        
        <Button variant="ghost" className="absolute right-8 top-8">
          <Link href="sign-up">
            New restaurant
          </Link>
        </Button>
        
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            FullBelly
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
            className="w-full" type="submit" pendingText="Entering..." text="Access Panel" />
        </Form>

      </div>
    </div>
  );
}

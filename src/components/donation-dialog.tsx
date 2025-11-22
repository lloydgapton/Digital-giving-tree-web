import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import type { Wish, Charity } from '../lib/data';
import {Button } from './common/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './common/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './common/form';
import { Input } from './common/input';
import { Textarea } from './common/textarea'
import { Plus, Minus } from 'lucide-react';
import TransactionSuccess from './transaction-success';
import { useToast } from '../hooks/use-toast';

const donationSchema = z.object({
  quantity: z.number().min(1, 'Must donate at least 1 item.'),
  email: z.string().email('Please enter a valid email address.'),
  name: z.string().optional(),
  note: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationSchema>;

type DonationDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  wish: Wish;
  charity: Charity;
};

export default function DonationDialog({ isOpen, setIsOpen, wish, charity }: DonationDialogProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [donationAmount, setDonationAmount] = useState(0);

  const { toast } = useToast();

  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      quantity: 1,
      email: '',
      name: '',
      note: '',
    },
  });

  const quantity = form.watch('quantity');
  const total = quantity * wish.unitPrice;

  function onSubmit(data: DonationFormValues) {
    console.log('Donation processed:', data);
    setDonationAmount(data.quantity * wish.unitPrice);
    // you would process the payment here.
    setStep('success');
    toast({
      title: 'Donation Successful!',
      description: `Thank you for supporting ${charity.name}.`,
    });
  }
  
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
        form.reset();
        setStep('form');
    }, 300);
  };

  const handleQuantityChange = (amount: number) => {
    const currentQuantity = form.getValues('quantity');
    const newQuantity = Math.max(1, currentQuantity + amount);
    form.setValue('quantity', newQuantity);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl" style={{color: "hsl(var(--primary))"}}>Donate to: {wish.title}</DialogTitle>
              <DialogDescription>
                You're supporting '{charity.name}'. Thank you for your generosity.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="mb-2 block">Quantity</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-2">
                           <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(-1)} disabled={field.value <= 1}>
                             <Minus className="h-4 w-4" />
                           </Button>
                           <Input {...field} type="number" className="w-16 text-center" />
                           <Button type="button" variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(1)}>
                             <Plus className="h-4 w-4" />
                           </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email (for receipt)</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="note"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Note (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="A message of support..." {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <DialogFooter className="sm:justify-between items-center pt-4">
                  <div className="text-2xl font-bold font-headline" style={{color: "hsl(var(--primary))"}}>
                    Total: ${total.toFixed(2)}
                  </div>
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground" style={{color: "hsl(var(--accent-foreground))", backgroundColor:"hsl(var(--accent))"}}>
                    Complete Donation
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <TransactionSuccess
            charityName={charity.name}
            wishTitle={wish.title}
            donationAmount={donationAmount}
            onClose={handleClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

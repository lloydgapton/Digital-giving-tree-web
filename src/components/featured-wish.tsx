import { useState } from 'react';
import type { Wish, Charity } from '../lib/data';
import { findImage } from "../lib/data";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './common/Card';
import { Progress } from './common/progress';
import { Button } from './common/Button';
import DonationDialog from './donation-dialog';
import { Badge } from './common/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

type FeaturedWishProps = {
  wish: Wish;
  charity: Charity;
};

export default function FeaturedWish({ wish, charity }: FeaturedWishProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const progress = (wish.quantityDonated / wish.quantityNeeded) * 100;
  const wishImage = findImage(charity.bannerId);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  const amountLeft = (wish.quantityNeeded - wish.quantityDonated) * wish.unitPrice;

  return (
    <>
      <section className="mb-12 md:mb-20">
        <Card className="shadow-lg border-t-4 border-accent overflow-hidden animate-breathing-glow"style={{borderColor: "hsl(var(--accent))" ,  backgroundColor: 'hsl(var(--card))'}} >
          <CardHeader className="text-center pb-4">
              <div className="flex justify-center items-center gap-2"style={{color: "hsl(var(--accent))"}} >
                <Sparkles className="h-6 w-6 text-accent"/>
                <CardTitle className="text-3xl md:text-4xl font-headline font-bold" style={{color: "hsl(var(--primary))"}} >Featured Wish</CardTitle>
                <Sparkles className="h-6 w-6"style={{color: "hsl(var(--accent))"}} />
              </div>
              <CardDescription className="text-base md:text-lg max-w-3xl mx-auto">
                This wish is so close to being fulfilled! Your contribution can be the one to make it happen.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <img
                    src={wishImage.imageUrl}
                    alt={wishImage.description}
                    className="object-cover w-full h-full"
                    data-ai-hint={wishImage.imageHint}
                />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline text-2xl font-bold" style={{color: "hsl(var(--primary))"}}>{wish.title}</h3>
                    <Badge variant="secondary" style={{backgroundColor:"hsl(var(--secondary))"}}>{wish.category}</Badge>
                </div>
                <p className="text-sm mb-4" style={{color: "hsl(var(--muted-foreground))"}}>
                    For <Link to={`/charity/${charity.slug}`} className="font-semibold hover:underline"style={{color: "hsl(var(--primary))"}}>{charity.name}</Link>
                </p>
                <p className="mb-4" style={{color: "hsl(var(--foreground)/0.8)"}}>{wish.description}</p>
                
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-sm" style={{color: "hsl(var(--muted-foreground))"}} >
                        <span>{formatCurrency(wish.quantityDonated * wish.unitPrice)} raised</span>
                        <span className="font-semibold">{formatCurrency(wish.quantityNeeded * wish.unitPrice)} goal</span>
                    </div>
                    <Progress value={progress} className="h-3"/>
                    <p className="text-center text-sm font-medium mt-2 animate-pulse" style={{color: "hsl(var(--accent))"}}>Just {formatCurrency(amountLeft)} to go!</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-lg font-bold " style={{color: "hsl(var(--primary))"}}>{formatCurrency(wish.unitPrice)} <span className="text-sm font-normal"style={{color: "hsl(var(--muted-foreground))"}} >per item</span></p>
                    <Button onClick={() => setIsDialogOpen(true)} size="lg" className="help-btn shadow-lg transform hover:scale-105 transition-transform" style={{backgroundColor: "hsl(var(--accent))", color:"hsl(var(--accent-foreground))"}}>
                        Help Complete this Wish <ArrowRight className="ml-2"/>
                    </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <DonationDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        wish={wish}
        charity={charity}
      />
    </>
  );
}
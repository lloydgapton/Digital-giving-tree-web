import { Button } from './common/Button';
import { CheckCircle, Gift, Link as LinkIcon, Twitter, Facebook } from 'lucide-react';

type TransactionSuccessProps = {
  charityName: string;
  wishTitle: string;
  donationAmount: number;
  onClose: () => void;
};

export default function TransactionSuccess({
  charityName,
  wishTitle,
  donationAmount,
  onClose,
}: TransactionSuccessProps) {
  const shareText = `I just donated to ${charityName} via the Giving Tree!`;
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'https://giving-tree.example';

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };
  
  return (
    <div className="flex flex-col items-center text-center p-4">
      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
      <h2 className="font-headline text-2xl font-bold text-primary mb-2">Thank You!</h2>
      <p className="text-muted-foreground mb-6">
        Your generous donation to <span className="font-semibold text-foreground">{charityName}</span> will make a real difference.
      </p>

      <div className="bg-muted/50 rounded-lg p-4 w-full mb-6 text-left">
        <h3 className="font-semibold text-lg mb-2 flex items-center"><Gift className="h-5 w-5 mr-2 text-primary" />Donation Summary</h3>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">For:</span>
          <span className="font-medium">{wishTitle}</span>
        </div>
        <div className="flex justify-between text-sm font-bold mt-2">
          <span>Amount:</span>
          <span>${donationAmount.toFixed(2)}</span>
        </div>
         <p className="text-xs text-muted-foreground mt-4">A receipt has been sent to your email address for your records.</p>
      </div>

      <h3 className="font-semibold mb-3">Share your support!</h3>
      <div className="flex gap-2 mb-6">
        <Button variant="outline" size="icon" asChild>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
            </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4" />
            </a>
        </Button>
        <Button variant="outline" size="icon" onClick={copyLink} aria-label="Copy link">
          <LinkIcon className="h-4 w-4" />
        </Button>
      </div>

      <Button onClick={onClose} className="w-full">Close</Button>
    </div>
  );
}

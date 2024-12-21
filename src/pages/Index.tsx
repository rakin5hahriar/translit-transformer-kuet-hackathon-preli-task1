import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy } from "lucide-react";
import TransliterationPanel from "@/components/TransliterationPanel";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTransliterate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Please enter some text",
        description: "Type some Banglish text to transliterate",
      });
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOutputText("বাংলা টেক্সট আউটপুট");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to transliterate text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      toast({
        title: "Copied!",
        description: "Bengali text copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8 fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Banglish to Bengali</h1>
          <p className="text-lg text-muted-foreground">
            Convert Banglish text to proper Bengali script
          </p>
        </div>

        <TransliterationPanel
          inputText={inputText}
          outputText={outputText}
          isLoading={isLoading}
          onInputChange={setInputText}
          onTransliterate={handleTransliterate}
          onCopy={handleCopy}
        />
      </div>
    </div>
  );
};

export default Index;
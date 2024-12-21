import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import LoadingDots from "./LoadingDots";

interface TransliterationPanelProps {
  inputText: string;
  outputText: string;
  isLoading: boolean;
  onInputChange: (text: string) => void;
  onTransliterate: () => void;
  onCopy: () => void;
}

const TransliterationPanel = ({
  inputText,
  outputText,
  isLoading,
  onInputChange,
  onTransliterate,
  onCopy,
}: TransliterationPanelProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="input" className="block text-sm font-medium">
          Banglish Text
        </label>
        <textarea
          id="input"
          className="transliterate-input"
          placeholder="Type your Banglish text here..."
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={onTransliterate}
          disabled={isLoading || !inputText.trim()}
          className="w-full sm:w-auto"
        >
          {isLoading ? <LoadingDots /> : "Transliterate"}
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium">Bengali Text</label>
          {outputText && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2"
              onClick={onCopy}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          )}
        </div>
        <div className="transliterate-output font-bengali">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse-slow text-muted-foreground">
                Transliterating...
              </div>
            </div>
          ) : outputText ? (
            outputText
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Bengali translation will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransliterationPanel;
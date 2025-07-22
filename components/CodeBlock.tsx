"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Enhanced syntax highlighting function
    const highlightSyntax = (code: string, lang: string) => {
        if (!code) return code;

        let highlightedCode = code;

        if (lang === 'html') {
            // HTML highlighting
            highlightedCode = highlightedCode
                .replace(/(&lt;\/?[a-zA-Z][^&gt;]*&gt;)/g, '<span class="text-blue-400">$1</span>')
                .replace(/(<\/?[a-zA-Z][^>]*>)/g, '<span class="text-blue-400">$1</span>')
                .replace(/([\w-]+)=/g, '<span class="text-green-400">$1</span>=')
                .replace(/="([^"]*)"/g, '="<span class="text-yellow-300">$1</span>"')
                .replace(/&lt;!--.*?--&gt;/gs, '<span class="text-gray-500">$&</span>');
        }
        else if (lang === 'css') {
            // CSS highlighting
            highlightedCode = highlightedCode
                .replace(/([a-zA-Z-]+)(?=\s*:)/g, '<span class="text-blue-400">$1</span>')
                .replace(/:([^;{]+)/g, ': <span class="text-yellow-300">$1</span>')
                .replace(/\{|\}/g, '<span class="text-red-400">$&</span>')
                .replace(/(\/\*.*?\*\/)/gs, '<span class="text-gray-500">$1</span>')
                .replace(/(@[a-zA-Z-]+)/g, '<span class="text-purple-400">$1</span>');
        }
        else if (lang === 'javascript' || lang === 'js') {
            // JavaScript highlighting
            highlightedCode = highlightedCode
                .replace(/\b(const|let|var|function|return|if|else|for|while|class|extends|import|export|from|async|await|try|catch|throw|new)\b/g, '<span class="text-purple-400">$1</span>')
                .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$1</span>')
                .replace(/"([^"]*)"/g, '"<span class="text-green-400">$1</span>"')
                .replace(/'([^']*)'/g, "'<span class=\"text-green-400\">$1</span>'")
                .replace(/`([^`]*)`/g, '`<span class="text-green-400">$1</span>`')
                .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>')
                .replace(/\b(\d+)\b/g, '<span class="text-orange-300">$1</span>');
        }
        else if (lang === 'python' || lang === 'py') {
            // Python highlighting
            highlightedCode = highlightedCode
                .replace(/\b(def|class|if|elif|else|for|while|try|except|finally|with|as|import|from|return|yield|break|continue|pass|lambda|and|or|not|in|is|global|nonlocal|async|await)\b/g, '<span class="text-purple-400">$1</span>')
                .replace(/\b(True|False|None)\b/g, '<span class="text-orange-400">$1</span>')
                .replace(/\b(self|cls)\b/g, '<span class="text-cyan-400">$1</span>')
                .replace(/"([^"]*)"/g, '"<span class="text-green-400">$1</span>"')
                .replace(/'([^']*)'/g, "'<span class=\"text-green-400\">$1</span>'")
                .replace(/"""([\s\S]*?)"""/g, '"""<span class="text-green-400">$1</span>"""')
                .replace(/'''([\s\S]*?)'''/g, "'''<span class=\"text-green-400\">$1</span>'''")
                .replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>')
                .replace(/\b(\d+)\b/g, '<span class="text-orange-300">$1</span>')
                .replace(/(@\w+)/g, '<span class="text-yellow-400">$1</span>') // decorators
                .replace(/\b(print|len|str|int|float|list|dict|tuple|set|range|enumerate|zip)\b/g, '<span class="text-blue-300">$1</span>'); // built-ins
        }
        else if (lang === 'java' || lang === 'spring') {
            // Java/Spring highlighting
            highlightedCode = highlightedCode
                .replace(/\b(public|private|protected|static|final|abstract|synchronized|volatile|transient|native|strictfp|class|interface|enum|extends|implements|package|import|throws|throw|try|catch|finally|if|else|for|while|do|switch|case|default|break|continue|return|new|this|super|instanceof|void|int|long|short|byte|char|boolean|float|double|String)\b/g, '<span class="text-purple-400">$1</span>')
                .replace(/\b(true|false|null)\b/g, '<span class="text-orange-400">$1</span>')
                .replace(/"([^"]*)"/g, '"<span class="text-green-400">$1</span>"')
                .replace(/'(.)'/g, "'<span class=\"text-green-400\">$1</span>'")
                .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>')
                .replace(/\b(\d+L?)\b/g, '<span class="text-orange-300">$1</span>')
                .replace(/(@\w+)/g, '<span class="text-yellow-400">$1</span>') // annotations
                .replace(/\b(System|String|Object|List|ArrayList|HashMap|Map|Set|HashSet|Collection|Iterator|Scanner|StringBuilder|Exception|RuntimeException)\b/g, '<span class="text-blue-300">$1</span>') // common classes
                .replace(/\b(RestController|Controller|Service|Repository|Component|Autowired|RequestMapping|GetMapping|PostMapping|PutMapping|DeleteMapping|PathVariable|RequestParam|RequestBody)\b/g, '<span class="text-cyan-400">$1</span>'); // Spring annotations
        }
        else if (lang === 'php') {
            // PHP highlighting
            highlightedCode = highlightedCode
                .replace(/&lt;\?php|\?&gt;/g, '<span class="text-blue-400">$&</span>')
                .replace(/(<\?php|\?>)/g, '<span class="text-blue-400">$1</span>')
                .replace(/\b(if|elseif|else|endif|for|foreach|endfor|endforeach|while|endwhile|do|switch|case|default|break|continue|function|return|class|extends|implements|interface|trait|namespace|use|try|catch|finally|throw|new|clone|instanceof|public|private|protected|static|final|abstract|const|var|global|echo|print|include|include_once|require|require_once|isset|empty|unset|die|exit)\b/g, '<span class="text-purple-400">$1</span>')
                .replace(/\b(true|false|null|TRUE|FALSE|NULL)\b/g, '<span class="text-orange-400">$1</span>')
                .replace(/(\$\w+)/g, '<span class="text-cyan-400">$1</span>') // variables
                .replace(/"([^"]*)"/g, '"<span class="text-green-400">$1</span>"')
                .replace(/'([^']*)'/g, "'<span class=\"text-green-400\">$1</span>'")
                .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500">$1</span>')
                .replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>')
                .replace(/\b(\d+)\b/g, '<span class="text-orange-300">$1</span>')
                .replace(/\b(array|string|int|float|bool|object|callable|iterable|mixed|void)\b/g, '<span class="text-blue-300">$1</span>') // types
                .replace(/\b(__construct|__destruct|__call|__callStatic|__get|__set|__isset|__unset|__sleep|__wakeup|__toString|__invoke|__set_state|__clone|__debugInfo)\b/g, '<span class="text-yellow-400">$1</span>'); // magic methods
        }

        return highlightedCode;
    };

    const getLanguageLabel = (lang: string) => {
        const labels: { [key: string]: string } = {
            html: 'HTML',
            css: 'CSS',
            javascript: 'JavaScript',
            js: 'JavaScript',
            tsx: 'TypeScript React',
            ts: 'TypeScript',
            json: 'JSON',
            python: 'Python',
            py: 'Python',
            java: 'Java',
            spring: 'Java Spring',
            php: 'PHP'
        };
        return labels[lang.toLowerCase()] || lang.toUpperCase();
    };

    return (
        <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">
                        {getLanguageLabel(language)}
                    </span>
                </div>

                <motion.button
                    onClick={copyToClipboard}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            <span>¡Copiado!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            <span>Copiar</span>
                        </>
                    )}
                </motion.button>
            </div>

            {/* Code Content */}
            <div className="bg-gray-900 overflow-x-auto">
                <pre className="p-6 text-sm leading-relaxed">
                    <code
                        className="text-gray-300 font-mono"
                        dangerouslySetInnerHTML={{
                            __html: highlightSyntax(code, language)
                        }}
                    />
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
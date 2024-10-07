import { Button } from "@/components/ui/button";

export function CustomComponent5() {
  return (
    <header className="container mx-auto p-6 flex justify-between items-center">
      <div className="text-3xl font-bold text-[#0088cc]">GramStep</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#features" className="text-gray-600 hover:text-[#0088cc]">
          機能
        </a>
        <a href="#use-cases" className="text-gray-600 hover:text-[#0088cc]">
          使用事例
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-[#0088cc]">
          料金
        </a>
        <a href="#faq" className="text-gray-600 hover:text-[#0088cc]">
          FAQ
        </a>
      </nav>
      <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white">無料で始める</Button>
    </header>
  );
}

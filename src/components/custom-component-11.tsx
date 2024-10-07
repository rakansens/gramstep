import { Button } from "@/components/ui/button";

export function CustomComponent11() {
  return (
    <section className="text-center py-20 bg-[#e7f3ff] rounded-xl bg-[#0088cc]">
      <h2 className="text-4xl font-bold mb-8 text-[#0088cc] text-white">
        未来のマーケティング、今ここに。
      </h2>
      <p className="text-xl mb-8 text-gray-600 text-white">
        GramStepで、顧客との新しい関係性を構築しましょう。
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg bg-slate-800">
          無料トライアルを始める
        </Button>
        <Button
          variant="outline"
          className="text-[#0088cc] border-[#0088cc] hover:bg-[#e7f3ff] text-lg px-8 py-4 rounded-full"
        >
          デモをリクエスト
        </Button>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-white">
        クレジットカード不要・1000通まで無料・いつでもキャンセル可能
      </p>
    </section>
  );
}

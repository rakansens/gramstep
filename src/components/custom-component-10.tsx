import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function CustomComponent10() {
  return (
    <section className="py-16 container mx-auto px-4 max-w-3xl">
      <h3 className="text-center text-sm font-semibold text-[#0088cc] mb-2">FAQ</h3>
      <h2 className="text-3xl font-bold text-center mb-4 text-[#0088cc] bg">よくある質問</h2>
      <p className="text-center text-gray-600 mb-12">
        その他のご質問がございましたら、お気軽にお問い合わせください。
      </p>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="item-1" className="border rounded-lg">
          <AccordionTrigger className="text-left px-4 py-3 hover:no-underline">
            GramStepはどのようにTelegramと連携していますか？{" "}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            GramStepはTelegramの公式APIを使用して完全に統合されています。これにより、Telegramの強力な機能を活用しながら、マーケティングや顧客エンゲージメントのための独自の機能を提供しています。Telegramのセキュリティと速度を維持しつつ、高度な自動化とデータ分析を実現しています。{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border rounded-lg">
          <AccordionTrigger className="text-left px-4 py-3 hover:no-underline">
            GramStepの習得にどのくらい時間がかかりますか？{" "}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            GramStepは直感的に設計されており、基本的な機能は数分間で習得できます。ユーザーフレンドリーなインターフェースと詳細なガイドにより、技術的な知識がなくても簡単に使い始めることができます。より高度な機能や自動化の設定にはサポートチームが対応いたします。{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border rounded-lg">
          <AccordionTrigger className="text-left px-4 py-3 hover:no-underline">
            GramStepで作成したキャンペーンはどのように表示されますか？{" "}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            GramStepで作成したキャンペーンは、ユーザーのTelegramアプリ内でシームレスに表示されます。テキスト、画像、ビデオ、ボタン、インタラクティブな要素など、Telegramでサポートされているすべての形式を使用できます。キャンペーンはネイティブのTelegramメッセージとして表示されるため、ユーザーエクスペリエンスを損なうことなく、高いエンゲージメント率を実現できます。{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border rounded-lg">
          <AccordionTrigger className="text-left px-4 py-3 hover:no-underline">
            GramStepは他のマーケティングツールと統合できますか？{" "}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            はい、現在開発中ですがGramStepは多くの一般的なビジネスツールと連携可能です。CRM、プロジェクト管理ツール、マーケティングプラットフォームなど、様々なサービスとの統合が可能です。詳細は公式ウェブサイトの連携ページをご確認ください。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border rounded-lg">
          <AccordionTrigger className="text-left px-4 py-3 hover:no-underline">
            初めての場合、GramStepでステップメールを作るのにどのくらいの時間がかかりますか？
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3">
            Telegramボットを通じてインタラクティブなユーザーエクスペリエンスを提供できます。基本的なボットの設定は数分で完了し、より複雑なフローや対話型のコンテンツの作成には1時間程度かかります。テンプレートや事前に設定されたシナリオを使用することで、さらに迅速にキャンペーンを立ち上げることができます。{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border rounded-lg" />
        <AccordionItem value="item-1" className="border rounded-lg" />
      </Accordion>
    </section>
  );
}

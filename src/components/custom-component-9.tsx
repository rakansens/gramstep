import { Card, CardContent } from "@/components/ui/card";

export function CustomComponent9() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#0088cc]">ユーザーの声</h2>
        <p className="text-xl text-center mb-12 text-gray-600">
          GramStepを利用している企業からの評価をご紹介します。
          <br />{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                GramStepの導入により、顧客とのコミュニケーションが劇的に改善しました。
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">田中 健太</h3>
                  <p className="text-gray-500 text-sm">@kentaro_tanaka</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                GramStepを導入してから、マーケティング戦略が大きく変わりました。特にセグメンテーション機能とAIチャットボットの組み合わせが素晴らしいんです。
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">佐藤 美咲</h3>
                  <p className="text-gray-500 text-sm">@misaki_sato</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                GramStepの導入により、我々のマーケティング戦略が大きく変わりました。特に、アカウントBANの心配がなくなったことで、より大胆で革新的なキャンペーンを展開できるようになりました。
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">
                    サンライズソリューションズ株式会社
                  </h3>
                  <p className="text-gray-500 text-sm">@sunrise_solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                以前使っていたLINEの従量課金制度では、毎月の請求額が予測できず、個人的にとても大変でした。GramStepに切り替えてからは定額制のおかげで、コストの心配なく自由にコミュニケーションが取れるようになりました。
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">山田 絵美</h3>
                  <p className="text-gray-500 text-sm">@emi_yamada</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                アカウントBANの心配がなくなったことで、思い切ったマーケティング施策を展開できるようになりました。固定料金制なので、予算管理も容易になり、経営陣からの評価も上がりました。
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">グローバルテック株式会社</h3>
                  <p className="text-gray-500 text-sm">@teck_global</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                当社はグローバル展開を目指していますが、GramStepの大規模なユーザーベースのおかげで、新しい市場への参入がより容易になりました
              </p>
              <div className="flex items-center">
                <img src="/images/placeholder.png" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-[#0088cc]">ゼファーテック株式会社 </h3>
                  <p className="text-gray-500 text-sm">@zephyrtech_jp</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

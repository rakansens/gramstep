import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function CustomComponent() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#2AABEE]">
          特定商取引法に関する表示
        </h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>販売会社</CardTitle>
          </CardHeader>
          <CardContent>
            <p>株式会社テックファクトリー</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>所在地</CardTitle>
          </CardHeader>
          <CardContent>
            <p>〒141-0022 東京都品川区東五反田2-8-5KNビル5F</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>問い合わせ先</CardTitle>
          </CardHeader>
          <CardContent>
            <p>info@techfactory.jp</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>料金</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>初期費用：なし</li>
              <li>基本料金：月額20,000円（税込）</li>
            </ul>
            <p className="mt-4">※無料トライアル期間をご用意しています。</p>
            <p>※無料期間内は自由に解約でき、課金後は1か月後から解約できます。</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>お支払い方法と時期</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>契約日を起算として1ヶ月毎にご登録いただいたクレジットカードより課金されます。</li>
              <li>無料期間を30日設けています。（公式ページからのご契約に限ります）</li>
              <li>例えば1月15日にご契約の場合、2月15日が初回決済日となります。</li>
              <li>（無料期間内の解約申請締切は初回課金日の3営業日前までとなります）</li>
              <li>解約手続きの都合上、無料期間最終日までのご利用はできません。</li>
              <li>解約申請は契約者様ご自身で専用フォームより行っていただきます。</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>商品の引き渡し時期</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              お申込み決済後、各手続きをし申請いただくと弊社にて設定を行います。2～3日中にはご使用が可能です。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>返品・交換不良品・解約について</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              原則として返金には応じておりません。あらかじめご了承ください。サービスを解約ご希望の場合は、解約申請フォームよりメールをお送りください。お送りいただきましてから2～3日営業日内にサービスを停止いたします。
            </p>
            <p className="mt-4">
              なお、解約時点で次回の課金日までの日数があった場合でも日割り計算によるご返金は行っておりません。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

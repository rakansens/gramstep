import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CustomComponent3() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#2AABEE]">プライバシーポリシー</h1>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="mb-4">
              株式会社Tech
              Factory（以下「当社」といいます）は、個人情報保護の重要性を強く認識し、取扱いに細心の注意を払っております。そのため、当社は、当社が利用者に関する個人情報をどのように取得、利用、開示、移転および保存するかについて規定するプライバシーポリシーを、提供サービスごとに定めています。
            </p>
            <p className="mb-4">
              この「プライバシーポリシー」（以下「本プライバシーポリシー」といいます）は、当社が提供する「GramStep-グラムステップ-」（以下「本サービス」といいます）において、本サービスを利用する方（以下「利用者」といいます）の個人情報をどのように取得、利用、開示、移転および保存するかについて規定します。本プライバシーポリシーは、「GramStep-グラムステップ-利用規約」、これに付随する諸規定及び各ガイドラインとともに、本サービスの利用に適用されるものとします。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. 個人情報の定義</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）を意味するものとします。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. 取得した情報の利用</CardTitle>
          </CardHeader>
          <CardContent>
            <p>本サービスは、取得した利用者の情報を以下の目的のために利用します。</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>本サービスの提供のため</li>
              <li>料金請求、課金計算のため</li>
              <li>本人確認、認証サービスのため</li>
              <li>マーケティング調査、統計、分析のため</li>
              <li>システムメンテナンス、不具合対応のため</li>
              <li>
                本サービス利用に関するご連絡ならびに当社の規約、条件およびポリシーの変更などの重要な通知をお送りするため
              </li>
              <li>技術サポートの提供、問い合わせ対応のため</li>
              <li>不正行為もしくは違法となる可能性のある行為を防止し、利用規約を施行するため</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. 第三者提供</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              本サービスは、原則として、提供先・提供情報内容を特定したうえで、利用者の同意を得た場合に限り、利用者の個人情報を第三者に提供します。ただし、以下の場合は、関係法令に反しない範囲で、利用者の情報を第三者に提供することがあります。
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>利用者が第三者に不利益を及ぼすと判断した場合</li>
              <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、利用者本人の承諾を得ることが困難である場合
              </li>
              <li>
                国の機関若しくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合で、利用者本人の同意を得ることによりその事務の遂行に支障を及ぼすおそれがある場合
              </li>
              <li>
                裁判所、検察庁、警察またはこれらに準じた権限を有する機関から、個人情報についての開示を求められた場合
              </li>
              <li>利用者本人から明示的に第三者への開示または提供を求められた場合</li>
              <li>法令により開示または提供が許容されている場合</li>
              <li>
                合併その他の事由による事業の承継に伴い個人情報を提供する場合であって、承継前の利用目的の範囲で取り扱われる場合
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. 個人情報取扱業務の外部委託</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              当社は、個人情報取扱業務の一部または全部を外部委託することがあります。なお、委託先における個人情報の取扱いについては当社が責任を負います。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. 統計データの利用</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              当社は、個人を特定できないよう加工した統計データを作成することがあります。当社は、統計データを何ら制限なく利用することができるものとします。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. 個人情報の開示・訂正・利用停止等</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              原則として、利用者代表者または利用者担当者ご本人（以下「本人」といいます）に限り、個人情報の開示、訂正、追加または削除、利用停止、ならびに第三者への提供の停止（以下「個人情報の開示等」といいます）を求めることができるものとします。ただし、以下の場合は個人情報の変更等に応じないことがあります。
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>本人または第三者の生命、身体、財産その他の権利・利益を害するおそれがある場合</li>
              <li>当社のサービスの適正な実施に著しい支障を及ぼすおそれがある場合</li>
              <li>他の法令に違反することとなる場合</li>
            </ul>
            <p className="mt-4">
              また、当該個人情報の変更等に多額の費用を要する場合､その他の、個人情報の開示等を行うことが困難な場合であって、本人の権利・利益を保護するため必要なこれに代わるべき措置をとるときは、個人情報の変更等に応じないことがあります。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Cookie（クッキー）その他の技術の利用</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              本サービスは、Cookie及びこれに類する技術を利用することがあります。これらの技術は、当社による本サービスの利用状況等の把握に役立ち、サービス向上に資するものです。Cookieを無効化されたい利用者は、ウェブブラウザの設定を変更することによりCookieを無効化することができます。但し、Cookieを無効化すると、本サービスの一部の機能をご利用いただけなくなる場合があります。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. 取得した個人情報の管理</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              当社は、個人情報等の漏洩、滅失又は毀損の防止その他の個人情報等の保護のため、個人情報ファイルへのアクセス制限の実施、アクセス権限保有者の必要最小限度の限定、また外部からの不正アクセス防止のためのセキュリティソフトの導入等、個人情報等の安全管理のために必要かつ適切な措置を講じます。
            </p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. プライバシーポリシーに関するお問い合わせ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              本サービスのプライバシーポリシーに関する質問やお問い合わせは、当社ウェブサイトに設置された「個人情報に関する公表事項」をご参照のうえご連絡ください。
            </p>
            <p className="mt-4">個人情報お問い合わせ窓口：株式会社Tech Factory</p>
            <p>個人情報保護管理者住所：〒141-0022 東京都品川区東五反田2-8-5KNビル5F</p>
            <p>メール：info@techfactory.jp</p>
            <p>受付時間：平日 11-17時（土日祝を除く）</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>10. プライバシーポリシーの改定</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              当社は、利用者の個人情報等の取扱いに関する運用状況を適宜見直し、継続的な改善に努めることとし、必要に応じて随時本プライバシーポリシーを改定することがあります。本プライバシーポリシーの重要な改定は、新のプライバシーポリシーとともに本サービス内または当社が運営するウェブサイト内に掲載します。
            </p>
            <p className="mt-4">
              本プライバシーポリシーの改定は、当社が本サービス内または当社が運営するウェブサイト内に掲示した時点から適用されるものとするほか、法令上利用者の同意が必要となるような内容の変更を行うときは、別途当社が定める方法により個別に利用者の同意を取得します。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

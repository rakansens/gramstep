"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlertCircle,
  CheckCircle,
  Ban,
  MessageCircle,
  Rss,
  Check,
  MessageSquare,
  LayoutGrid,
  MailCheck,
  SearchCheck,
  MessageCircleMore,
  Database,
  Smartphone,
  Users,
  Settings,
  Send,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

export function CustomComponent6() {
  return (
    <section className="text-center">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <Badge className="mb-4 text-sm bg-[#e7f3ff] text-[#0088cc] h-10">
          今だけ初月は無料で使える！
        </Badge>
        <h1 className="text-5xl font-bold mb-6 text-[#0088cc]">
          Gram Step
          <br />
          BANなし、無制限メッセージング配信ツール
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          BANなし、送り放題！今すぐ無制限の配信体験を。GRAMSTEPで。
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg">
            無料トライアル
          </Button>
          <Button
            variant="outline"
            className="text-[#0088cc] border-[#0088cc] hover:bg-[#e7f3ff] text-lg px-8 py-4 rounded-full"
          >
            資料ダウンロード
          </Button>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-12"
      >
        <Image
          alt="SaaS Dashboard"
          src="/images/dashboard.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#2AABEE]">
              <br />
            </h2>
            <div className="container mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary font-heading text-[#0088cc] py-16">
                こんな
                <span className="text-4xl text-[#0088cc]">お悩み</span>
                、ありませんか？
              </h2>
              <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="bg-slate-800 text-white p-4 rounded-t-lg">
                      <h2 className="text-xl font-bold text-3xl">従来の配信ツールの課題</h2>
                    </div>
                    <div className="bg-white p-4 rounded-b-lg shadow">
                      <div className="flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <p>アカウントBANによるビジネスへの深刻な影響</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <p>高額な従量課金</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <p>コンテンツ文面制限</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <p>メッセージの埋もれやすさ</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <p>集客できない</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-orange-500 p-2 rounded-full">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-white"
                      >
                        <path
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-500 text-white p-4 rounded-t-lg bg-[#0088cc]">
                      <h2 className="text-xl font-bold text-3xl">GramStepなら</h2>
                    </div>
                    <div className="bg-white p-4 rounded-b-lg shadow">
                      <div className="flex items-start mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <p>BANリスクがゼロ</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <p>従量課金はなく、送り放題</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <p>コンテンツ規制がないため自由なコンテンツを発信</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <p>優れたインターフェースにより離脱が少ない</p>
                      </div>
                      <div className="flex items-start mb-4">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <p>世界10億人以上のユーザーが利用している。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg bg-[#0088cc] px-8 py-12">
            <h2 className="text-xl font-bold bg-[#0088cc] text-3xl text-4xl">GramStepの特徴</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 bg-[#0088cc]">
              <Card className="flex flex-col items-center text-center p-6">
                <Ban className="w-16 h-16 text-[#2AABEE] mb-4" />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">LINE BANフリー</h3>
                  <p className="text-gray-600">
                    LINEのようなアカウントBAN（利用制限）の心配がありません。
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <MessageCircle className="w-16 h-16 text-[#2AABEE] mb-4" />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">無制限メッセージング</h3>
                  <p className="text-gray-600">
                    メッセージ数や頻度に制限がなく、自由にコミュニケーションが取れます。
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Rss className="w-16 h-16 text-[#2AABEE] mb-4" />
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">自由なコンテンツ配信</h3>
                  <p className="text-gray-600">様々な形式のコンテンツを自由に配信できます。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">他媒体からの遷移率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <svg viewBox="0 0 100 100" className="w-48 h-48">
                      <circle r="45" cx="50" cy="50" fill="#3B82F6" />
                      <circle
                        r="45"
                        cx="50"
                        cy="50"
                        fill="transparent"
                        stroke="#93C5FD"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        strokeDashoffset="70.675"
                      />
                      <text
                        x="50"
                        y="50"
                        dy=".3em"
                        textAnchor="middle"
                        className="text-3xl font-bold fill-white"
                      >
                        75%
                      </text>
                    </svg>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-bold">75%オーバーの結果</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">テレグラムの利用者数</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold">「月間アクティブユーザー」</span>
                    <span className="text-5xl font-bold text-blue-500">
                      7<span className="text-2xl">億人</span>
                    </span>
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold">「累計アクティブユーザー」</span>
                    <span className="text-5xl font-bold text-blue-500">
                      <span className="text-5xl font-bold text-blue-500">
                        10
                        <span className="text-2xl">億人</span>
                      </span>
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">ユーザーの開封率</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      className="w-48 h-48"
                    >
                      <circle r="45" cx="50" cy="50" fill="#3B82F6" />
                      <circle
                        r={38}
                        cx="50"
                        cy="50"
                        fill="transparent"
                        stroke="#93C5FD"
                        strokeWidth={15}
                        strokeLinejoin="miter"
                        strokeDasharray="282.7"
                        strokeDashoffset="70.675"
                      />
                      <text
                        x="50"
                        y="50"
                        dy=".3em"
                        textAnchor="middle"
                        className="text-3xl font-bold fill-white"
                      >
                        90%
                      </text>
                    </svg>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-bold">ユーザー開封率も90%を大きく超える。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-background py-16">
              <div className="space-y-4 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2AABEE] text-3xl">
                      世界10億人以上のユーザー
                    </h3>
                    <p className="text-gray-600 text-xl">
                      世界中で10億人以上の人がテレグラムを利用しています。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2AABEE] text-3xl">
                      広告なしで無料
                    </h3>
                    <p className="text-gray-600 text-xl">
                      テレグラムは広告がなく無料で利用できるため、ユーザーは安心して利用を続けられます。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2AABEE] text-3xl">
                      メッセージの視認性
                    </h3>
                    <p className="text-gray-600 text-xl">
                      メッセージが埋もれにくく、ユーザーのエンゲージメント向上に繋がりやすいため、効果的な情報伝達を実現できます。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2AABEE] text-3xl">
                      配信コスト効率
                    </h3>
                    <p className="text-gray-600 text-xl">
                      LINEよりも低コストな従量課金で、大規模配信も経済的に実現可能です。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2AABEE] text-3xl">
                      BANリスクゼロ
                    </h3>
                    <p className="text-gray-600 text-xl">
                      アカウントBANのリスクがなく、長期的なメッセージ配信を安定して行えます。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
        <div className="relative flex-1">
          <Image
            alt="SaaS Dashboard"
            src="/images/dashboard.png"
            width={713}
            height={497.7}
            className="rounded-xl border border-border shadow-lg"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-5">
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-primary text-left text-[#2AABEE]">
              Mail fast
            </span>
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-left">
              グラムステップ導入による成果
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-lg text-left">
            テレグラムステップの導入により、マーケティング効果が飛躍的に向上し、コスト効率も大幅に改善されます。
            <br />
            以下の主要な成果が期待できます：
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-primary" />
              <span className="text-muted-foreground">
                遷移率が平均30%以上向上し、顧客エンゲージメントが大幅に増加
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-primary" />
              <span className="text-muted-foreground">
                アカウントBANのリスクゼロで安定したマーケティング戦略が可能
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} className="size-5 text-primary" />
              <span className="text-muted-foreground">
                メッセージの開封率が80%以上に上昇し、効果的な情報伝達を実現
              </span>
            </li>
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button size="lg" asChild variant="outline">
              <Link href="#" className="h-12 cursor-pointer border-border text-base md:px-9">
                問い合わせる
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-[#0088cc] hover:bg-[#0077b5]">
              <Link href="#" className="h-12 cursor-pointer text-base md:px-9">
                無料で試す
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 py-24">
        <div className="bg-blue-500 text-white p-4 rounded-t-lg bg-[#0088cc]">
          <h2 className="text-xl font-bold bg-[#0088cc] text-3xl">
            グラムステップの豊富な機能一覧
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MessageSquare className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LineStep同様の機能</h3>
                <p className="text-gray-600">
                  LineStepの優れた機能を全て搭載し、さらに拡張。Telegramの強力な機能を活用して、より柔軟で効果的なマーケティングを実現します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <LayoutGrid className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">リッチ配信</h3>
                <p className="text-gray-600">
                  リッチメニュー、リッチ画像、カルーセル、アンケート、1:1Chatなど、あらゆるタイプのコンテンツ配信が可能。視覚的にも魅力的で、高いエンゲージメントを実現します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MailCheck className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">シナリオ配信</h3>
                <p className="text-gray-600">
                  ステップ配信、セグメント配信、リマインド配信、個別トーク、一斉配信などを含む、高度なシナリオ配信機能
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <SearchCheck className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">流入経路</h3>
                <p className="text-gray-600">
                  流入経路機能は、ユーザーがどのチャネルやキャンペーンを通じてサービスにアクセスしてきたかを追跡・分析します。これにより、マーケティング活動の効果を測定し、最適なチャネルにリソースを集中させることが可能です。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <MessageCircleMore className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">個別トーク</h3>
                <p className="text-gray-600">
                  個別トーク機能は、ユーザー一人ひとりに対してパーソナライズされたコミュニケーションを可能にします。これにより、ユーザーの満足度を高め、信頼関係を築くことができます。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Database className="w-8 h-8 text-[#0088cc]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">分析機能</h3>
                <p className="text-gray-600">
                  タグ管理、友だち情報欄管理、対応マーク管理、URLクリック測定、コンバージョン測定、ファネル分析、流入経路分析など、詳細な分析機能
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Card className="mt-8">
          <CardHeader className="py-12">
            <div className="bg-blue-500 text-white p-4 rounded-t-lg bg-[#0088cc]">
              <h2 className="text-xl font-bold bg-[#0088cc] text-3xl">
                テレグラムステップの具体的な活用例
              </h2>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">カスタマイズ可能なリッチメニュー設定</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    LINEのようなリッチメニューを設定し、ユーザーの導線に合わせた効果的なナビゲーションを実現します。例えば、ECサイトでは「新着商品」「セール情報」「マイページ」などのボタンを配置し、スムーズな購買体験を提供できます。
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">高度なシナリオ配信設定</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    ユーザーの行動やプロフィールに基づいて、自動的にパーソナライズされたメッセージを配信します。例えば、商品閲覧履歴に基づいてオススメ商品を紹介したり、誕生日にはクーポンを自動送付するなど、きめ細かなコミュニケーションが可能です。
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  <Users className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">リファラルマーケティングの自動化</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    紹介プログラムを設定し、ユーザーの紹介行動を追跡。新規顧客の獲得や成約を自動で確認し、適切な報酬を付与します。例えば、友達紹介で両者にポイントを付与したり、紹介件数に応じて特別特典を提供するなど、viral効果を最大化できます。
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  <Settings className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">詳細な分析機能の活用</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    ユーザーの行動データを細かく分析し、マーケティング戦略の最適化に活用します。例えば、メッセージの開封率やクリック率、購買転換率などを時系列で追跡し、A/Bテストの結果を可視化することで、より効果的なコンテンツ作成が可能になります。
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  <Send className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">AIを活用した自動応答システム</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    テレグラムステップのAI機能を利用して、よくある質問に自動で回答するシステムを構築できます。例えば、商品の在庫状況や配送状況の問い合わせに24時間対応することが可能になり、カスタマーサポートの負担を軽減しつつ、顧客満足度を向上させることができます。※開発中
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-t-lg bg-[#0088cc] py-12">
        <h2 className="text-xl font-bold text-4xl py-4">このような方はぜひ！</h2>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#0088cc]">料金プラン</h2>
          <div className="container mx-auto p-4 bg-white">
            <div className="space-y-4 mb-8 text-xl">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  アカウントBAN経験があり、安定したマーケティングプラットフォームを求めている方
                </p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">他社のツールの配信コストに満足していない方</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">現在の成約率に満足できず、改善の余地を探している方</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">自由なコンテンツ発信を求めている方</p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  マーケティングの自動化に興味があるが、複雑なツールに躊躇している方
                </p>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
                <p className="text-gray-700">コスト効率の高いマーケティングツールを探している方</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              これらの課題を抱えている方全員に、テレグラムステップは革新的なソリューションを提供します。
              <br />
              無料トライアルを通じて、あなたのビジネスにもたらす価値を直接体験してください。
            </p>
          </div>
          <p className="text-center text-gray-600 mb-8 text-white text-4xl py-24">
            <b>ビジネスの規模に合わせて最適なプランをお選びいただけます</b>
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span>月払い</span>
            <Switch />
            <span>年払い</span>
            <Badge variant="secondary" className="ml-2">
              2ヶ月分お得
            </Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0088cc] text-3xl">フリープラン</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-2 text-[#0088cc]">
                  <span className="text-sm font-normal">
                    <CardTitle className="text-[#0088cc] text-3xl">¥0</CardTitle>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">個人や小規模ビジネス向けの基本機能</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>月間1,000メッセージまで</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>基本的なチャットボット機能</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>シンプルな分析ツール</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>5つのステップまで作成可能</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>チャット・メール&nbsp; サポート</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="default"
                  className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg"
                >
                  無料トライアルを始める <br />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0088cc] text-3xl">プロプラン　</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-2 text-[#0088cc]">
                  <span className="text-sm font-normal">
                    <CardTitle className="text-[#0088cc] text-3xl">¥20,000/月</CardTitle>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">成長中の企業向けの高度な機能</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>月間50,000メッセージまで</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>高度なAIチャットボット</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>詳細な分析機能&nbsp;&nbsp;</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>50個 のステップ作成&nbsp;</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>優先サポート</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>カスタムインテグレーション</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg">
                  おすすめプランにする
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0088cc] text-3xl">エンタープライズ</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-2 text-[#0088cc]">
                  <span className="text-sm font-normal">
                    <CardTitle className="text-[#0088cc] text-3xl">¥100,000/月</CardTitle>
                  </span>
                </div>
                <p className="text-gray-600 mb-4">大規模ビジネス向けのカスタムソリューション</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>無制限のメッセージ</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>専用AIモデルのカスタマイズ</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>高度なセキュリティ機能</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>無制限のステップ作成</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>24/7テクニカルサポート</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#0088cc] mr-2" />
                    <span>優先機能提案&nbsp; &nbsp;</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg">
                  無制限プランにする
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

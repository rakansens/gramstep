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
          <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg px-8 py-4 rounded-full shadow-lg">
            資料ダウンロード
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden py-12 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Image
            alt="SaaS Dashboard"
            src="/images/dashboard.png"
            width={800}
            height={560}
            priority
            className="rounded-xl border border-border shadow-lg w-full h-auto max-w-4xl mx-auto"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white shadow-lg rounded-lg px-8 py-12 mt-12">
            <h2 className="text-3xl font-bold text-center text-[#0088cc] mb-8">
              こんなお悩み、ありませんか？
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-[#0088cc] text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">従来の配信ツールの課題</h3>
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
              <div>
                <div className="bg-[#0088cc] text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">GramStepの解決策</h3>
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
        </div>
      </motion.div>
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="bg-white shadow-lg rounded-lg px-8 py-12">
          <h2 className="text-xl font-bold text-6xl mb-8 text-primary">GramStepの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
            <Card className="flex flex-col items-center text-center p-6 border border-primary/20 shadow-md">
              <Ban className="w-16 h-16 text-primary mb-4" />
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-primary">LINE BANフリー</h3>
                <p className="text-gray-600">
                  LINEのようなアカウントBAN（利用制限）の心配がありません。
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 border border-primary/20 shadow-md">
              <MessageCircle className="w-16 h-16 text-primary mb-4" />
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-primary">無制限メッセージング</h3>
                <p className="text-gray-600">
                  メッセージ数や頻度に制限がなく、自由にコミュニケーションが取れます。
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 border border-primary/20 shadow-md">
              <Rss className="w-16 h-16 text-primary mb-4" />
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-primary">自由なコンテンツ配信</h3>
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
                    テレグラムは広告がなく無料で利用できるため、ユーザー��安心して利用を続��られます。
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
                    アカウントBANのリスクがなく、長期的なメッセージ配信を安定して行えま
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              alt="SaaS Dashboard"
              src="/images/dashboard.png"
              width={600}
              height={420}
              className="rounded-xl border border-border shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col gap-5">
              <span className="font-bold uppercase text-[#0088cc]">
                Mail fast
              </span>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                グラムステップ導入による成果
              </h2>
              <p className="text-lg text-muted-foreground">
                テレグラムステップの導入により、マーケティング効果が飛躍的に向上し、コスト効率も大幅に改善されます。
                以下の主要な成果が期待できます：
              </p>
              <ul className="space-y-3">
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
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white">
                  <Link href="#">問い合わせる</Link>
                </Button>
                <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white">
                  <Link href="#">無料で試す</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto p-4 py-24">
        <div className="bg-[#0088cc] text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold text-3xl">
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
            <div className="bg-[#0088cc] text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold text-3xl">
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
                    紹介プログラムを設定し、ユーザーの紹介行動を追跡。新規顧客の獲得や成約を自動確認し、適切な報酬を付与します。例えば、友達紹介で両者にポイントを付与したり、紹介件数に応じて特別特典を提供するなど、viral効果を最大化できます。
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
                    テレグラムステップのAI機能を利用して、よくある質問に自動で回答するシステムを構築きます。例えば、商品の在庫状況や配送状況の問い合わせに24時間対応することが可能になり、カスタマーサポートの負担を軽減しつつ、顧客満足度を向上させることができます。※開発中
                  </p>
                  <Progress className="h-2 mt-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-12 text-primary">料金プラン</h2>
        <div className="flex items-center justify-center mb-8 space-x-4">
          <span>月払い</span>
          <Switch className="bg-primary" />
          <span>年払い</span>
          <Badge className="ml-2 bg-primary/20 text-primary">2ヶ月分お得</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary text-2xl">フリープラン</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-2xl font-bold mb-2 text-primary">
                <CardTitle className="text-primary text-3xl">¥0</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">個人や小規模ビジネス向けの基本機能</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>月間1,000メッセージまで</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>基本的なチャットボット機能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>シンプルな分析ツール</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>5つのステップまで作成可能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>チャット・メール&nbsp; サポート</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-full shadow-lg">
                無料トライアルを始める
              </Button>
            </CardFooter>
          </Card>
          <Card className="border border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary text-3xl">プロプラン　</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-2 text-primary">
                <CardTitle className="text-primary text-3xl">¥20,000/月</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">成長中の企業向けの高度な機能</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>月間50,000メッセージまで</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>高度なAIチャットボット</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>詳細な分析機能&nbsp;&nbsp;</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>50個 のステップ作成&nbsp;</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>優先サポート</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>カスタムインテグレーション</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-full shadow-lg">
                おすすめプランにする
              </Button>
            </CardFooter>
          </Card>
          <Card className="border border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-primary text-3xl">エンタープライズ</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-2 text-primary">
                <CardTitle className="text-primary text-3xl">¥100,000/月</CardTitle>
              </div>
              <p className="text-gray-600 mb-4">大規模ビジネス向けのカスタムソリューション</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>無制限のメッセージ</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>専用AIモデルのカスタマイズ</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>高度なセキュリティ機能</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>無制限のステップ作成</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>24/7テクニカルサポート</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>優先機能提案&nbsp; &nbsp;</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 rounded-full shadow-lg">
                無制限プランにする
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
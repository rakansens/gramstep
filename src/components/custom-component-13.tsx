import { Card } from "@/components/ui/card";

export function CustomComponent13() {
  return (
    <div>
      <Card className="bg-white shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2024 　グラムステップ運営会社 株式会社テックファクトリー
            </p>
          </div>
          <a
            rel="noopener noreferrer"
            href="https://techfactory.jp/"
            target="_blank"
            className="text-sm text-[#2AABEE] hover:text-[#229ED9]"
          >
            https://techfactory.jp/
          </a>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li>
                <a href="/page-2" class="text-sm text-gray-600 hover:text-[#2AABEE]">
                  特定商取引法に関する表示
                </a>
              </li>
              <li>
                <a href="/page-3" class="text-sm text-gray-600 hover:text-[#2AABEE]">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/page-4" class="text-sm text-gray-600 hover:text-[#2AABEE]">
                  プライバシーポリー
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Card>
    </div>
  );
}

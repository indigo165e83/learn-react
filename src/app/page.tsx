import Link from 'next/link'

export default function Home() {
  return (
    <>
      <a
        className=""
        href="https://react.dev/learn/describing-the-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        React公式 Learn React
      </a>
      <p>に記載されているコードを実践してみる</p>
      <div className="m-2"/>
      <h2 className="text-xl">Describing the UI:UIの説明</h2>
      <ul className="ml-3">
        <li>Your First Component|最初のコンポーネント</li>
        <li>Importing and Exporting Components|コンポーネントのインポートとエクスポート</li>
        <li>Writing Markup with JSX|JSXでマークアップを書く</li>
        <li>
          <Link href="/01-describing-the-ui/04-js-in-jsx-with-curly-braces">
            JavaScript in JSX with Curly Braces|中括弧を使用した JSX の JavaScript
          </Link>
        </li>
        <li>
          <Link href="/01-describing-the-ui/05-passing-props-to-a-component">
            Passing Props to a Component|プロパティをコンポーネントに渡す
          </Link>
        </li>
        <li>Conditional Rendering|条件付きレンダリング</li>
        <li>Rendering Lists|レンダリングリスト</li>
        <li>
          <Link href="/01-describing-the-ui/08-keeping-components-pure">
            Keeping Components Pure|コンポーネントを純粋に保つ
          </Link>
        </li>
      </ul>

      <div className="m-2"/>
      <h2 className="text-xl">Adding Interactivity|インタラクティブ性の追加</h2>
      <ul className="ml-3">
        <li>
          <Link href="/02-adding-interactivity/01-responding-to-events">
            Responding to Events|イベントへの応答
          </Link>
        </li>
        <li>
          <Link href="/02-adding-interactivity/02-state-a-components-memory">
            State: A Component&apos;s Memory|状態: コンポーネントのメモリ
          </Link>
        </li>
        <li>Render and Commit|レンダリングとコミット</li>
        <li>
          <Link href="/02-adding-interactivity/04-state-as-a-snapshot">
            State as a Snapshot|スナップショットとしての状態
          </Link>
        </li>
        <li>
          <Link href="/02-adding-interactivity/05-queueing-a-series-of-state-updates">
            Queueing a Series of State Updates|一連の状態更新をキューに入れる
          </Link>
        </li>
        <li>
          <Link href="/02-adding-interactivity/06-updating-objects-in-state">
            Updating Objects in State|状態内のオブジェクトの更新
          </Link>
        </li>
        <li>
          <Link href="/02-adding-interactivity/07-updating-arrays-in-state">
            Updating Arrays in State|状態内の配列を更新する
          </Link>
        </li>
      </ul>

      <div className="m-2"/>
      <h2 className="text-xl">Managing State|状態の管理</h2>
      <ul className="ml-3">
        <li>
          <Link href="/03-managing-state/01-reacting-to-input-with-state">
            Reacting to Input with State|状態による入力への反応
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/02-choosing-the-state-structure">
            Choosing the State Structure|状態構造の選択
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/03-sharing-state-between-components">
            Sharing State Between Components|コンポーネント間での状態の共有
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/04-preserving-and-resetting-state">
            Preserving and Resetting State|状態の保存とリセット
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/05-extracting-state-logic-into-a-reducer">
            Extracting State Logic into a Reducer|状態ロジックを Reducer に抽出する
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/06-passing-data-deeply-with-context">
            Passing Data Deeply with Context|コンテキストに応じてデータを深く渡す
          </Link>
        </li>
        <li>
          <Link href="/03-managing-state/07-scaling-up-with-reducer-and-context">
            Scaling Up with Reducer and Context|Reducer と Context によるスケールアップ
          </Link>
        </li>
      </ul>

      <div className="m-2"/>
      <h2 className="text-xl">Escape Hatches|避難ハッチ</h2>
      <ul className="ml-3">
        <li>
          <Link href="/04-escape-hatches/01-referencing-values-with-refs">
            Referencing Values with Refs|Ref を使用した値の参照
          </Link>
        </li>
        <li>
          <Link href="/04-escape-hatches/02-manipulating-the-dom-with-refs">
            Manipulating the DOM with Refs|Ref を使用した DOM の操作
          </Link>
        </li>
        <li>
          <Link href="/04-escape-hatches/03-synchronizing-with-effects">
            Synchronizing with Effects|エフェクトとの同期
          </Link>
        </li>
        <li>You Might Not Need an Effect|エフェクトは必要ないかもしれません</li>
        <li>Lifecycle of Reactive Effects|リアクティブ効果のライフサイクル</li>
        <li>Separating Events from Effects|イベントとエフェクトを分離する</li>
        <li>Removing Effect Dependencies|エフェクトの依存関係の削除</li>
        <li>Reusing Logic with Custom Hooks|カスタムフックを使用したロジックの再利用</li>
      </ul>

    </>
  )
}
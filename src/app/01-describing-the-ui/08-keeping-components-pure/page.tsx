//https://react.dev/learn/keeping-components-pure#challenges
//https://react.dev/learn/keeping-components-pure
import Link from 'next/link'
import Challenge01 from './challenge01'
//import Challenge02 from './challenge02'
//import Challenge03 from './challenge03'

export default function Page() {
  return (
    <div>
      <h2>
        Reactは、作成するすべてのコンポーネントが純粋な関数であることを前提としています。
      </h2>
      <h2>
        これは、作成した React コンポーネントは、同じ入力が与えられた場合に常に同じ JSX を返さなければならないことを意味します。
      </h2>
      <h2>
        <a
          className=""
          href="https://react.dev/learn/keeping-components-pure#challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try out some challenges|いくつかのチャレンジを試してみる
        </a>
      </h2>
      <h3>Challenge01</h3>
        <Challenge01 />
      <h3>Challenge02</h3>
      <h3>Challenge03</h3>
    </div>
  )
}
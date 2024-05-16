export function Select({
  options,
  title,
}: {
  title: string
  options: string[]
}): JSX.Element {
  return (
    <div className="p-10 lg:px-[8vw] xl:px-[10vw]  ">
      <select>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  )
}

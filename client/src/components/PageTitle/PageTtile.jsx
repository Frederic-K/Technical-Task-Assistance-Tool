const Title = ({ content }) => (
  <div className="mx-auto max-w-lg bg-zinc-300/25">
    <h1 className="flex justify-center rounded-md border border-zinc-400 bg-gradient-to-r from-orange-700 via-orange-400 to-orange-700 bg-clip-text p-2 text-2xl font-bold text-transparent dark:bg-zinc-200/10">
      {content}
    </h1>
  </div>
)

export default Title

interface gloryItemInterface {
  title: string,
  comment: string,
  description: string,
  features: {
    title: string,
    desc: string,
  }[]
}


const GloryItemComponent = ({ item }: { item: gloryItemInterface }) => {
  return (
    <div className="flex bg-[rgb(3,3,3)] text-[#dbdbcf] p-2 w-[468px] h-[442px] border-[#231d1c]">
      <p className="font-roboto-bold text-lg">{item.title}</p>
      <p className="font-roboto text-sm">{item.comment}</p>
    </div>
  )
}

export default GloryItemComponent;
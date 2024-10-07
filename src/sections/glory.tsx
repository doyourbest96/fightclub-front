import { gloryItemData } from "@/components/RoadToGlory/gloryItem.data"
import GloryItemComponent from "@/components/RoadToGlory/gloryItemComps"

export default function Glory() {
  return (
    <div className="p-2">
        <GloryItemComponent item={gloryItemData[0]} />
        <GloryItemComponent item={gloryItemData[1]} />
        <GloryItemComponent item={gloryItemData[2]} />
    </div>
  )
}
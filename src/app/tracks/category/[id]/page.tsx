import { getCategoryTracks } from "@/api/tracks"
import Playlist from "@/components/Playlist/Playlist";

type CategoryType = {
    params: {id: string}
}

export default async function CategoryPage ({params}: CategoryType ){
  const categoryTracks = await getCategoryTracks(params.id);

    return (
  <div>
<Playlist tracks={categoryTracks} playlist={categoryTracks}/>
  </div>
    )
}
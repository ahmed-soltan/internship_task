import Banner from "@/components/Banner"
import Features from "@/components/Features"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
        <Banner/>
        <Features/>
    </div>
  )
}

export default Home
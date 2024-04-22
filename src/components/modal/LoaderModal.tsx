import Loader from "@/svg/Loader";

const LoaderModal = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center transition-colors visible bg-green-30/80 z-50">
        <div className="items-center justify-center">
                <Loader />
        </div>
    </div>
  )
}

export default LoaderModal

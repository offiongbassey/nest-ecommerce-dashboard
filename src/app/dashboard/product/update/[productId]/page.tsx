import EditProduct from "@/components/product/edit/EditProduct"


const page = ({ params }: {
    params: { productId: number }
}) => {
  return (
    <EditProduct productId={params.productId} />
  )
}

export default page

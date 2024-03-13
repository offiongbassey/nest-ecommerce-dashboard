import Button from "../Button"
import Input from "../Input"

const AddProduct = () => {
  return (
    <div className="padding-container pt-32 text-green-30">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
            <h2 className="text-2xl font-[600]">Add New Product</h2>
        </div>
        <div className="flex gap-2 items-center">
            <Button type="button" variant="btn_green_outline">Save to draft</Button>
            <Button type="button" variant="btn_green">Publish</Button>
        </div>
     </div>
     <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white rounded-2xl border border-gray-20 my-6 w-full">
            <div className="p-6">
                <h4 className="text-xl font-[600]">Basic</h4>
            </div>
            <hr/>
            <div className="p-6">
                <label htmlFor="title" className="block mb-2">Product title</label>
                <Input name="title" type="text" variant="primary-input" placeholder="Type here" />
                <label htmlFor="description" className="block mt-6 mb-2">Full description</label>
                <textarea rows={5} className="bg-gray-90 focus:outline-none rounded-md w-full mb-4 p-2"></textarea>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:flex-1">
                        <label htmlFor="regular_price" className="block mb-2">Regular Price</label>
                        <Input name="regular_price" type="text" variant="primary-input" placeholder="$" />
                    </div>
                    <div className="w-full md:flex-1">
                        <label htmlFor="promotional_price" className="block mb-2">Promotional Price</label>
                        <Input name="promotional_price" type="text" variant="primary-input" placeholder="$" />
                    </div>
                    <div className="w-full md:flex-1">
                        <label htmlFor="regular_price" className="block mb-2">Currency</label>
                        <select className="primary-select w-full">
                            <option>USD</option>
                            <option>Naira</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="tax" className="block mb-2 mt-6">Tax Rate</label>
                <Input name="tax" type="text" variant="primary-input" placeholder="%" />
            </div>
        </div>
        <div>
            <div className="bg-white rounded-2xl border border-gray-20 my-6">
                <div className="p-6">
                <h4 className="text-xl font-[600]">Media</h4>
                </div>
                <hr/>
                <div className="p-6">
                    <p className="text-center py-10">Media Image</p>
                    <Input name="file" type="file" variant="primary-input" placeholder="" />
                </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-20 mb-6">
                <div className="p-6">
                    <h4 className="text-xl font-[600]">Organization</h4>
                </div>
                <hr/>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                       <div>
                            <label className="block mb-3">Category</label>
                            <select className="primary-select w-full">
                            <option>Automobiles</option>
                            <option>Food</option>
                            <option>Cloths</option>
                            </select>
                       </div>
                       <div>
                            <label className="block mb-3 text-nowrap">Sub-category</label>
                            <select className="primary-select w-full">
                            <option>Nissan</option>
                            <option>Snacks</option>
                            <option>Nike</option>
                            </select>
                       </div>
                    </div>
                    <label className="block mt-4">Tags</label>
                    <Input type="text" name="tags" variant="primary-input" placeholder="" />
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default AddProduct

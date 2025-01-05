import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardContent
} from '@/components/ui/card'
import ProductPrice from './product-price'

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="w-full max-w-sm">
        <Link
          href={`/products/${product.slug}`}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
          />
        </Link>
        <CardContent className='p-4 grid gap-4'>
          <div className="text-sx">{product.brand}</div>
          <Link href={`/products/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
          <div className="flex-between gap-4">
            <p>{product.rating} Stars</p>
            {product.stock > 0 ? (
              <ProductPrice
                value={Number(product.price)}
                className='text-red-500'
              />
            ) : (
              <p className="text-destructive">Out Of Stock</p>
            )}
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default ProductCard;

import './App.css'
import TopBar from './assets/Componentes/TopBar'
import Header from './assets/Componentes/Header'
import CategoryNav from './assets/Componentes/CategoryNav'
import HeroBanner from './assets/Componentes/HeroBanner'
import DonationKits from './assets/Componentes/DonationKits'
import CategoryExplorer from './assets/Componentes/CategoryExplorer'
import ProductSection from './assets/Componentes/ProductSection'
import RecipeSection from './assets/Componentes/RecipeSection'
import BrandsSection from './assets/Componentes/BrandsSection'
import PromoBanners from './assets/Componentes/PromoBanners'
import Footer from './assets/Componentes/Footer'
import banner1 from './assets/Banner1.png'
import banner2 from './assets/Banner2.jpg'
import banner3 from './assets/Banner3.png'



import {
  PiSparkle, PiPlusCircle, PiBasket, PiAppleLogo, PiCheese,
  PiBeerBottle, PiFish, PiFlask, PiMedal, PiHouseLine,
  PiCarrot, PiBowlFood, PiHamburger,
} from 'react-icons/pi'

const categories = [
  { name: 'Extraordinarios', Icon: PiSparkle },
  { name: 'Donaciones', Icon: PiPlusCircle },
  { name: 'Despensa', Icon: PiBasket },
  { name: 'Frutas y verduras', Icon: PiAppleLogo },
  { name: 'Lácteos y huevos', Icon: PiCheese },
  { name: 'Bebidas', Icon: PiBeerBottle },
  { name: 'Pollo, carne y pescado', Icon: PiFish },
  { name: 'Cuidado personal y belleza', Icon: PiFlask },
]

const exploreCategories = [
  { name: 'Extraordinarios', Icon: PiMedal },
  { name: 'Hogar', Icon: PiHouseLine },
  { name: 'Cuidado personal y belleza', Icon: PiFlask },
  { name: 'Frutas y verduras', Icon: PiCarrot },
  { name: 'Despensa', Icon: PiBowlFood },
  { name: 'Carnes frías delikatessen', Icon: PiHamburger },
]

const slides = [
  { title: 'Título 1', text: 'Texto 1', image: banner1 },
  { title: 'Título 2', text: 'Texto 2', image: banner2 },
  { title: 'Título 3', text: 'Texto 3', image: banner3 },
]

const kits = [
  { id: 1, brand: 'D2', name: 'Kit #2 Donación - Aseo', price: 22750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/205799-197-197?v=639222481614670000&width=197&height=197&aspect=true' },
  { id: 2, brand: 'D2', name: 'Kit #3 Donación - Alimentos', price: 34650, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/205801-197-197?v=639222482089470000&width=197&height=197&aspect=true' },
  { id: 3, brand: 'D2', name: 'Kit #4 Donación - Alimentos', price: 22750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/205800-197-197?v=639222481830000000&width=197&height=197&aspect=true' },
]


const loveProducts = [
  { id: 1, brand: 'GHALIA', name: 'Queso Muenster/Gouda Ghalia 150 Gr', price: 8990, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/202228-800-800?v=639179704839070000&width=800&height=800&aspect=true'},
  { id: 2, brand: 'GHALIA', name: 'Queso Holandés Ghalia 150 Gr', price: 8990, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/202219/queso-holandes-ghalia-150gr-12005247-01.png.png?v=639179704596000000'},
  { id: 3, brand: 'BESTIES', name: 'Masmelos Surtidos Besties 120 Gr', price: 3300, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/204344/masmelos-surtidos-besties-120g-12007879-00.png?v=639190398049370000' },
  { id: 4, brand: 'BESTIES', name: 'Gomas Surtidas Besties 120 Gr', price: 2850, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/204352-800-800?v=639190401264770000&width=800&height=800&aspect=true' },
]

const recipes = [
  { id: 1, tag: 'Compartir', name: 'Pasta carbonara con champiñones', price: 54520, img: 'https://d1tiendas.vtexassets.com/assets/vtex.file-manager-graphql/images/c51c0608-86e1-451e-9360-8e4f302d91d2___8dd351ff7590d312267363e85d88a8ed.jpg?height=300&aspect=true&version=9-2026'},
  { id: 2, tag: 'Compartir', name: 'Hot dog', price: 86680, img: 'https://d1tiendas.vtexassets.com/assets/vtex.file-manager-graphql/images/4597903a-ba9d-455f-a056-85d709c2b1bb___d3119eda49b59d756ac22ab0e8594d62.jpg?height=300&aspect=true&version=9-2026'},
  { id: 3, tag: 'Compartir', name: 'Chorizo envuelto en hojaldre', price: 48110, img: 'https://d1tiendas.vtexassets.com/assets/vtex.file-manager-graphql/images/286a3acb-3c43-4387-a8a7-08c3146f2229___8775dc3a6f41cf2b75e6455a6f8dfaa1.jpg?height=300&aspect=true&version=9-2026' },
  { id: 4, tag: 'Desayunos', name: 'Bowl de yogurt griego con açaí y fruta', price: 40470, img: 'https://d1tiendas.vtexassets.com/assets/vtex.file-manager-graphql/images/e687223e-c043-4fd1-9c82-5ff8fff35eae___1c6c41e85a91f985abc91052ed945976.png?height=300&aspect=true&version=9-2026' },
]

const clothesProducts = [
  { id: 1, brand: 'BONAROPA', name: 'Detergente Ropa Delicad Bonaropa 1000 Ml', price: 6600, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/199655-197-197?v=639179644159600000&width=197&height=197&aspect=true'},
  { id: 2, brand: 'BONAROPA', name: 'Quitamanchas Blanco Polvo Bonaropa 450 G', price: 9700, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/202514-197-197?v=639179729024600000&width=197&height=197&aspect=true'},
  { id: 3, brand: 'BONAROPA', name: 'Perlas de Fragancia Bonaropa 285 Gr', price: 9990, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/202770-197-197?v=639179827410800000&width=197&height=197&aspect=true'},
]

const top100 = [
  { id: 1, brand: 'BRILLA KING', name: 'Blanqueador en Gel Brilla King 1 Lt', price: 3750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/200775-197-197?v=639179668706200000&width=197&height=197&aspect=true'},
  { id: 2, brand: 'LATTI', name: 'Leche Deslactosada Tetrapak UHT Latti 900 Ml', price: 3750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/199194-197-197?v=639179635419670000&width=197&height=197&aspect=true'},
  { id: 3, brand: 'ALBAR', name: 'Arroz Premium Albar 2500 G', price: 9750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/200594-197-197?v=639179664265570000&width=197&height=197&aspect=true' },
  { id: 4, brand: 'RENDY', name: 'Toalla de Cocina Rendy Doble Hoja', price: 1750, img: 'https://d1tiendas.vtexassets.com/arquivos/ids/199075-197-197?v=639179632894670000&width=197&height=197&aspect=true'},
]

const brands = ['Negrol', 'Besties', 'Bonaropa', 'Brilla King', 'Captain Bay', 'Carlo Forte']

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <CategoryNav categories={categories} />

      <main className="container">
        <HeroBanner slides={slides} />
        <DonationKits kits={kits} />
        <CategoryExplorer categories={exploreCategories} />
        <ProductSection title="Combinaciones perfectas" highlight="Amor y amistad" products={loveProducts} />
        <RecipeSection recipes={recipes} img={recipes.img} />
        <ProductSection title="Cuida tu ropa" highlight="como se lo merece" products={clothesProducts} />
        <ProductSection title="Nuestros productos" highlight="Top 100" products={top100} />
        <BrandsSection brands={brands} />
        <PromoBanners />
      </main>

      <Footer />
    </>
  )
}

export default App
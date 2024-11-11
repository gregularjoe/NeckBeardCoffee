import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeeComponent } from './components/products/coffee/coffee.component';
import { JavaCoffeeComponent } from './components/products/coffee/java-coffee/java-coffee.component';
import { SpaceCadetComponent } from './components/products/coffee/space-cadet/space-cadet.component';
import { FlowPowComponent } from './components/products/coffee/flow-pow/flow-pow.component';
import { OutThereComponent } from './components/products/coffee/out-there/out-there.component';
import { OhMyDaysComponent } from './components/products/coffee/oh-my-days/oh-my-days.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},

    {path: 'products', component: ProductsComponent, title: "| Products |"},

    { path: 'products/coffee',component: CoffeeComponent, title: " | Products | Coffee |"},              
    { path: 'products/coffee/java-coffee', component: JavaCoffeeComponent, title: "| Products | Coffee | Java |" },
    { path: 'products/coffee/space-cadet', component: SpaceCadetComponent, title: "| Products | Coffee | Space Cadet |" },
    { path: 'products/coffee/flow-pow', component: FlowPowComponent, title: "| Products | Coffee | Flow Pow |" },
    { path: 'products/coffee/out-there', component: OutThereComponent, title: "| Products | Coffee | Out There |" },
    { path: 'products/coffee/oh-my-days', component: OhMyDaysComponent, title: "| Products | Coffee | Oh My Days |" },
    
  // merch path

    {path: 'shopping-cart', component: ShoppingCartComponent, title: "| Shopping Cart |"}








    // {path: 'products', component: ProductsComponent, title: "| Products |",
    //     children: [
    //         { path: 'coffee',component: CoffeeComponent, title: " | Products | Coffee |",
    //             children: [
    //                 { path: 'java-coffee', component: JavaCoffeeComponent, title: "| Products | Coffee | Java |" },
    //                 { path: 'space-cadet', component: SpaceCadetComponent, title: "| Products | Coffee | Space Cadet |" },
    //                 { path: 'flow-pow', component: FlowPowComponent, title: "| Products | Coffee | Flow Pow |" },
    //                 { path: 'out-there', component: OutThereComponent, title: "| Products | Coffee | Out There |" },
    //                 { path: 'oh-my-days', component: OhMyDaysComponent, title: "| Products | Coffee | Oh My Days |" }
    //             ]
    //         }
    //     ]
    // },
    // {path: 'shopping-cart', component: ShoppingCartComponent, title: "| Shopping Cart |"}
    
    
];
      



    
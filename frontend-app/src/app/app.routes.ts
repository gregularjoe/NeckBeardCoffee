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

    {path: 'products', component: ProductsComponent,
        children: [
            { path: 'coffee',component: CoffeeComponent,
                children: [
                    {path: 'java-coffee', component: JavaCoffeeComponent},
                    {path: 'space-cadet', component: SpaceCadetComponent},
                    {path: 'flow-pow', component: FlowPowComponent},
                    {path: 'out-there', component: OutThereComponent},
                    {path: 'oh-my-days', component: OhMyDaysComponent}
                ]
            }
        ]
    },
    {path: 'shopping-cart', component: ShoppingCartComponent}
    
];
      



    
import image1 from '../assets/menu/ptitdej/Avocado toast avec œuf poché.jpg'
import image2 from '../assets/menu/ptitdej/Croissant au jambon et au fromage.jpg'
import image3 from '../assets/menu/ptitdej/Omelette aux légumes frais.jpg';
import image4 from '../assets/menu/ptitdej/Pancakes moelleux avec sirop d_érable.jpg';
import image5 from '../assets/menu/ptitdej/Porridge aux fruits et aux noix.jpeg';
import image6 from '../assets/menu/ptitdej/Smoothie bowl aux baies et aux graines.jpg';
import image7 from '../assets/menu/ptitdej/Yaourt grec aux fruits et granola.jpg';

import image8 from '../assets/menu/platEntree/Assiette de charcuterie et de fromages assortis.jpg'
import image9 from '../assets/menu/platEntree/Bruschetta à la tomate et à la mozzarella.jpg'
import image10 from '../assets/menu/platEntree/Carpaccio de bœuf avec huile d_olive et copeaux de parmesan.jpeg';
import image11 from '../assets/menu/platEntree/Crevettes grillées à l_ail et au  citron.jpg';
import image12 from '../assets/menu/platEntree/Salade de chèvre chaud avec vinaigrette au miel.jpeg';
import image13 from '../assets/menu/platEntree/Soupe.jpg';
import image14 from '../assets/menu/platEntree/Tartare de saumon frais avec avocat et coriandre.jpg';

import image15 from '../assets/menu/mainRepas/Curry végétarien avec du riz basmati.jpg'
import image16 from '../assets/menu/mainRepas/Filet de bœuf grillé avec sauce au poivre et légumes sautés.jpg'
import image17 from '../assets/menu/mainRepas/Pâtes fraîches aux fruits de mer dans une sauce tomate épicée.jpg';
import image18 from '../assets/menu/mainRepas/Poulet rôti aux herbes avec pommes de terre rôties.jpeg';
import image19 from '../assets/menu/mainRepas/Raviolis à la ricotta et aux épinards avec beurre à la sauge.jpg';
import image20 from '../assets/menu/mainRepas/Risotto crémeux aux champignons sauvages.jpg';
import image21 from '../assets/menu/mainRepas/Saumon grillé avec purée de patates douces et asperges.jpg';

import image22 from '../assets/menu/dîner/Côtes d_agneau grillées avec ratatouille provençale.webp'
import image23 from '../assets/menu/dîner/Escalopes de veau à la milanaise avec spaghetti à la sauce tomate.jpg'
import image24 from '../assets/menu/dîner/Lasagnes classiques à la viande et aux légumes.jpg';
import image25 from '../assets/menu/dîner/Magret de canard rôti avec confiture d_oignons et purée de céleri-rave.jpg';
import image26 from '../assets/menu/dîner/Pizza artisanale aux garnitures.jpg';
import image27 from '../assets/menu/dîner/Poisson en croûte de noix avec légumes d_automne.webp';
import image28 from '../assets/menu/dîner/Steak frites avec sauce.jpg';

import image29 from '../assets/menu/dessert/Crème brûlée à la vanille et aux baies fraîches.jpg'
import image30 from '../assets/menu/dessert/Fondant au chocolat avec coulis de framboise.jpg'
import image31 from '../assets/menu/dessert/Mousse au chocolat noir avec éclats de noisettes caramélisées.jpg';
import image32 from '../assets/menu/dessert/Panna cotta à la mangue et au coulis de fruits exotiques.jpeg';
import image33 from '../assets/menu/dessert/Profiteroles à la glace à la vanille et au chocolat chaud.jpeg';
import image34 from '../assets/menu/dessert/Tarte aux pommes maison avec crème fouettée.jpg';
import image35 from '../assets/menu/dessert/Tiramisu aux biscuits imbibés de café et au mascarpone crémeux.jpg';

import image36 from '../assets/menu/Jus/Jus de bissap.jpg'
import image37 from '../assets/menu/Jus/Jus de bouye.jpg'
import image38 from '../assets/menu/Jus/Jus de pastèque.jpg';
import image39 from '../assets/menu/Jus/Jus de pomme.jpg';
import image40 from '../assets/menu/Jus/jus d_orange.jpg';
import image41 from '../assets/menu/Jus/jus de gigembre avec du citron et de l_ananas.jpg';

export default function Menu(){
    return (
        <div>
            <h2>Petit-déjeuner</h2>
        <section class="food-grid" id="ptitdej" style='color: antiquewhite'>
            <div class="food-item">
                    <img src={image1} alt="" />
                <p>Du pain grillé garni d'avocat écrasé, d'un œuf poché parfaitement cuit et d'une pincée de sel et de poivre. 
                    Un plat tendance et délicieux pour les amateurs d'avocat.</p>
            </div>
            <div class="food-item">
                <img src={image2} alt="" />
                <p>Un croissant fraîchement cuit rempli de fines tranches de jambon et de fromage fondant. 
                    Un classique du petit-déjeuner qui comblera les amateurs de viennoiseries salées.</p>
            </div>
            <div class="food-item">
                 <img src={image3} alt="Omelette aux légumes frais" title="Omelette aux légumes frais" />
                 <p>Une omelette moelleuse garnie de légumes frais tels que des poivrons, des champignons et des épinards. 
                    Un excellent choix pour un petit-déjeuner sain et savoureux.</p>
            </div>
            <div class="food-item">
                <img src={image4} alt="Pancakes moelleux avec sirop d'érable" title="Pancakes moelleux avec sirop d'érable" />
                <p>Des pancakes légers et moelleux servis avec un délicieux sirop d'érable. 
                    Un classique du petit-déjeuner qui plaira à tous les gourmands.</p>
            </div>
            <div class="food-item">
                <img src={image5} alt="Porridge aux fruits et aux noix" title="Porridge aux fruits et aux noix" />
                <p>Un bol de porridge chaud et crémeux à base de flocons d'avoine, agrémenté de fruits frais coupés et de noix croquantes. 
                    Un choix réconfortant et nourrissant pour bien commencer la journée.</p>
            </div>
            <div class="food-item">
                <img src={image6} alt="Smoothie bowl aux baies et aux graines" title="Smoothie bowl aux baies et aux graines" />
                <p>Un bol de smoothie épais et nourrissant à base de baies mixées, 
                    de banane et de graines nutritives telles que les graines de chia et les graines de lin. 
                    Une explosion de saveurs et de bienfaits pour la santé.</p>
            </div>
            <div class="food-item">
                <img src={image7} alt="Yaourt grec aux fruits et granol" title="Yaourt grec aux fruits et granol" />
                <p>Un yaourt grec onctueux agrémenté de fruits frais de saison et de granola croustillant. 
                    Un choix équilibré et nourrissant pour commencer la journée.</p>
            </div>
        </section>

        <h2>Plat d'entrée</h2>
        <section class="food-grid" id="platEntree" style='color: antiquewhite'>
            <div class="food-item">
                <img src={image8} alt="" />
                <p>sélection de charcuterie fine et de fromages savoureux, accompagnée de pain frais et de condiments. 
                    Un choix parfait pour partager et déguster une variété de saveurs.</p>
            </div>
            <div class="food-item">
                <img src={image9} alt="" />
                <p> Des tranches de pain grillé garnies de tomates fraîches, de mozzarella fondante, d'ail et de basilic. 
                    Une entrée simple et savoureuse qui met en valeur les ingrédients frais.</p>
            </div>
            <div class="food-item">
                <img src={image10} alt="" />
                <p>Des tranches fines de bœuf cru marinées dans de l'huile d'olive et garnies de copeaux de parmesan. 
                    Un plat élégant et léger pour stimuler les papilles.</p>
            </div>
            <div class="food-item">
                <img src={image11} alt="" />
                <p> Des crevettes grillées à la perfection, assaisonnées d'ail et de jus de citron pour une saveur fraîche et légèrement acidulée. 
                    Un choix délicieux pour les amateurs de fruits de mer.</p>
            </div>
            <div class="food-item">
                <img src={image12} alt="" />
                <p> Une salade verte garnie de fromage de chèvre chaud, de noix croquantes et d'une vinaigrette au miel. 
                    Un mélange de saveurs douces et salées qui ouvre l'appétit.</p>
            </div>
            <div class="food-item">
                <img src={image13} alt="" />
                <p>Une soupe maison préparée avec des légumes frais de saison, offrant une variété de saveurs réconfortantes. 
                    Chaque jour, découvrez une nouvelle soupe pour satisfaire votre appétit.</p>
            </div>
            <div class="food-item">
                <img src={image14} alt="" />
                <p>Du saumon frais coupé en dés, mélangé à de l'avocat crémeux et de la coriandre fraîche. 
                    Un plat cru et savoureux qui met en valeur la fraîcheur du poisson.</p>
            </div>
        </section>

         <h2>Repas principal</h2>
        <section class="food-grid" id="mainRepas" style='color: antiquewhite'>
            <div class="food-item">
                <img src={image15} alt="" />

                <p> Un curry parfumé et épicé, préparé avec un mélange de légumes frais, servi avec du riz basmati léger et parfumé.
                    Un plat végétarien coloré et délicieux.</p>
            </div>
            <div class="food-item">
                <img src={image16} alt="" />
                <p>Un filet de bœuf tendre et juteux, grillé à la perfection, accompagné d'une sauce au poivre riche et de légumes sautés croquants. 
                    Un plat principal savoureux et satisfaisant.</p>
            </div>
            <div class="food-item">
                <img src={image17} alt="" />
            
                <p>Un poulet juteux et parfumé, rôti lentement avec des herbes aromatiques, servi avec des pommes de terre rôties croustillantes. 
                    Un classique familial qui ne déçoit jamais.</p>
            </div>
            <div class="food-item">
                <img src={image18} alt="" />

                <p> Des pâtes fraîches faites maison, mélangées à des fruits de mer tels que des crevettes et des moules, dans une sauce tomate relevée d'épices. 
                    Un plat savoureux et parfumé qui ravira les amateurs de fruits de mer.</p>
            </div>
            <div class="food-item">
                <img src={image19} alt="" />

                <p>De délicieux raviolis farcis à la ricotta et aux épinards, accompagnés d'une sauce au beurre à la sauge. 
                    Une combinaison de saveurs douces et herbacées qui fondent dans la bouche.</p>
            </div>
            <div class="food-item">
                <img src={image20} alt="" />

                <p>Un risotto crémeux à base de riz Arborio, agrémenté de champignons sauvages sautés et de parmesan râpé. 
                    Un plat italien réconfortant et savoureux.</p>
            </div>
            <div class="food-item">
            <img src={image21} alt="" />

                <p>Un filet de saumon grillé à la peau croustillante, accompagné d'une purée veloutée de patates douces et d'asperges fraîches. 
                    Une combinaison équilibrée de saveurs et de textures.</p>
            </div>
        </section>

         <h2>Dîner</h2>
        <section class="food-grid" id="dîner" style='color: antiquewhite'>
            <div class="food-item">
                <img src={image22} alt="" />

                <p>Des côtes d'agneau grillées à la perfection, accompagnées d'une ratatouille provençale colorée et savoureuse. 
                    Un plat méditerranéen qui célèbre les saveurs estivales.</p>
            </div>
            <div class="food-item">
                <img src={image23} alt="" />

                <p> Des escalopes de veau panées et dorées, servies avec des spaghetti al dente 
                    et une sauce tomate fraîche et parfumée. Un classique italien apprécié de tous.</p>
            </div>
            <div class="food-item">
                <img src={image24} alt="" />
                <p> Des couches de pâtes fraîches, de viande hachée savoureuse et de légumes, le tout nappé d'une sauce tomate et de béchamel, gratinées au fromage. 
                    Un plat réconfortant et généreux qui rappelle les saveurs de l'Italie.</p>
            </div>
            <div class="food-item">
                <img src={image25} alt="" />

                <p>Un magret de canard tendre et juteux, rôti à la perfection, servi avec une confiture 
                    d'oignons sucrée et une purée onctueuse de céleri-rave. Un plat élégant et plein de saveurs.</p>
            </div>
            <div class="food-item">
                <img src={image26} alt="" />

                <p> Une pizza fraîchement préparée avec une pâte fine et croustillante, garnie de vos ingrédients préférés tels que des légumes, 
                    des viandes et des fromages. Une explosion de saveurs à chaque bouchée.</p>
            </div>
            <div class="food-item">
                <img src={image27} alt="" />

                <p>Un filet de poisson frais, enrobé d'une croûte de noix croustillante, accompagné de légumes de saison sautés. 
                    Un plat délicat et raffiné qui met en valeur la fraîcheur du poisson.</p>
            </div>
            <div class="food-item">
                <img src={image28} alt="" />

                <p> Un steak juteux, cuit selon vos préférences, accompagné de frites croustillantes et d'une sauce au choix, telle que béarnaise ou au poivre. 
                    Un classique incontournable pour les amateurs de viande.</p>
            </div>
        </section>

        <h2>Dessert</h2>
        <section class="food-grid" id="dessert" style='color: antiquewhite'>
            <div class="food-item">
                <img src={image29} alt="" />

                <p>Une crème onctueuse à la vanille, recouverte d'une fine couche de caramel caramélisé, 
                    accompagnée de baies fraîches pour une touche de fraîcheur et de couleur.</p>
            </div>
            <div class="food-item">
                <img src={image30} alt="" />

                <p>Un gâteau au chocolat chaud et fondant, servi avec un coulis de framboise acidulé. 
                    Une combinaison irrésistible pour les amateurs de chocolat.</p>
            </div>
            <div class="food-item">
                <img src={image31} alt="" />

                <p>Une mousse légère et onctueuse au chocolat noir intense, garnie d'éclats de noisettes caramélisées pour une touche croquante et sucrée.</p>
            </div>
            <div class="food-item">
                <img src={image32} alt="" />

                <p> Une panna cotta crémeuse à la mangue, agrémentée d'un coulis de fruits exotiques tels que la passion et l'ananas. 
                    Un dessert léger et fruité qui apporte une touche tropicale.</p>
            </div>
            <div class="food-item">
                <img src={image33} alt="" />

                <p> De petits choux fourrés de crème glacée à la vanille, nappés d'une sauce au chocolat chaud. 
                    Une combinaison classique et délicieuse pour les amateurs de desserts.</p>
            </div>
            <div class="food-item">
                <img src={image34} alt="" />

                <p> Une tarte aux pommes classique avec une croûte dorée et croustillante, 
                    garnie de tranches de pommes fondantes et servie avec une généreuse portion de crème fouettée.</p>
            </div>
            <div class="food-item">
                <img src={image35} alt="" />

                <p> Un dessert italien emblématique composé de couches de biscuits savoiardi imbibés de café, de crème mascarpone et saupoudrées de cacao. 
                    Une harmonie parfaite entre le café, le mascarpone et le chocolat.</p>
            </div>
        </section>

        <h2>Jus de fruits</h2>
        <section class="food-grid" id="jus" style='color: antiquewhite'>
            <div class="food-item">
                <img src={image36} alt="" />

                <p>Notre jus d'orange est préparé à partir d'oranges fraîches et juteuses, pressées à la perfection pour extraire leur délicieux nectar. 
                    Ce jus classique et rafraîchissant est une véritable explosion de saveurs vitaminées, avec une douceur naturelle 
                    et une légère acidité. Parfait pour vous revigorer le matin ou pour vous offrir une pause fruitée tout au long de la journée.</p>
            </div>
            <div class="food-item">
                <img src={image37} alt="" />

                <p>Laissez-vous transporter vers les tropiques avec notre jus de bissap, préparé à partir des fleurs d'hibiscus séchées. 
                    D'une belle couleur rouge rubis, ce jus offre une expérience gustative unique, avec une saveur à la fois acidulée et légèrement sucrée. 
                    Rafraîchissant et revitalisant, il est apprécié pour ses propriétés désaltérantes et son caractère rafraîchissant. Une délicieuse escapade vers des contrées exotiques.</p>
            </div>
            <div class="food-item">
                <img src={image38} alt="" />

                <p>Découvrez le délice crémeux de notre jus de bouye, élaboré à partir du fruit du baobab. Ce jus exotique vous séduira par sa texture onctueuse 
                    et sa saveur légèrement acidulée, évoquant les agrumes. Il est apprécié pour sa richesse en vitamines, minéraux et antioxydants. 
                    Laissez-vous transporter vers les terres africaines et savourez cette boisson unique, symbole de traditions ancestrales.</p>
            </div>
            <div class="food-item">
                <img src={image39} alt="" />

                <p>Découvrez une combinaison audacieuse de saveurs dans notre jus de gingembre avec du citron et de l'ananas. 
                    Le gingembre ajoute une note épicée et revigorante, tandis que le citron apporte une touche de fraîcheur et l'ananas une douceur tropicale. 
                    Ce jus énergisant est apprécié pour ses bienfaits stimulants et son goût unique qui éveillera vos sens.</p>
            </div>
            <div class="food-item">
                <img src={image40} alt="" />

                <p>Notre jus de pastèque est une véritable gorgée de fraîcheur estivale. Pressé à partir de pastèques juteuses et sucrées, 
                    ce jus rafraîchissant vous offre une explosion de saveurs fruitées. D'une couleur vibrante et d'une douceur désaltérante, 
                    ce jus est idéal pour vous hydrater et vous revigorer par une journée ensoleillée.</p>
            </div>
            <div class="food-item">
                <img src={image41} alt="" />

                <p>Notre jus de pomme est préparé à partir de pommes soigneusement sélectionnées pour leur douceur naturelle et leur saveur équilibrée. 
                    Ce jus pur et rafraîchissant est apprécié pour sa simplicité et son goût authentique de pommes fraîchement pressées. 
                    Dégustez-le pour un moment de pureté et de plaisir fruité.</p>
            </div>
        </section>

    <div class="next-page">
        <p>Le WaveRider offre aussi des services de livraison pour plus d'info <a href='/contact'>cliquez ici</a></p>
    </div>
        </div>
    )
}
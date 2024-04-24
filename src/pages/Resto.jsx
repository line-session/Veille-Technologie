import image_resto_1 from '../assets/menu/ptitdej/Croissant au jambon et au fromage.jpg';
import image_resto_2 from '../assets/menu/platEntree/Crevettes grillées à l_ail et au  citron.jpg';
import image_resto_3 from '../assets/menu/mainRepas/Filet de bœuf grillé avec sauce au poivre et légumes sautés.jpg';
import image_resto_4 from '../assets/menu/dîner/Pizza artisanale aux garnitures.jpg';
import image_resto_5 from "../assets/menu/dessert/Fondant au chocolat avec coulis de framboise.jpg";
import image_resto_6 from '../assets/menu/dessert/Tarte aux pommes maison avec crème fouettée.jpg';

export default function Resto() {
  return (
    <>
      <section style='color: antiquewhite;'>
        <h1>Le WaveRider</h1>
        <p>
          Bienvenue chez WaveRider, votre destination gastronomique en bord de mer. Plongez dans un voyage culinaire inoubliable où les saveurs de l'océan se mêlent à une cuisine raffinée. Laissez-vous emporter par nos plats exquis, préparés avec passion et expertise. Que vous soyez un amateur de fruits de mer, un passionné de cuisine internationale ou simplement en quête d'une expérience gustative unique, notre équipe dévouée vous attend pour vous offrir un moment de délice et d'évasion. Détendez-vous, savourez et profitez de l'ambiance chaleureuse de notre établissement. Bienvenue à WaveRider, où chaque bouchée est une vague de plaisir.
        </p>
      </section>
      <section class="food-image_resto_">
        <h2>Voici quelques-uns de nos plats</h2>
        <div class="food-grid" style='color:antiquewhite;'>
          <div class="food-item">
            <img src={image_resto_1} alt="" />
            <p>Croissant au jambon et au fromage</p>
          </div>
          <div class="food-item">
            <img src={image_resto_2} alt="" />
            <p>Crevettes grillées à l'ail et au citron</p>
          </div>
          <div class="food-item">
            <img src={image_resto_3} alt="" />
            <p>Filet de bœuf grillé avec sauce au poivre et légumes sautés</p>
          </div>
        </div>
        <div class="food-grid" style='color:antiquewhite;'>
          <div class="food-item">
            <img src={image_resto_4} alt="" />
            <p>Pizza artisanale aux garnitures</p>
          </div>
          <div class="food-item">
            <img src={image_resto_5} alt="" />
            <p>Fondant au chocolat avec coulis de framboise</p>
          </div>
          <div class="food-item">
            <img src={image_resto_6} alt="" />
            <p>Tarte aux pommes maison avec crème fouettée</p>
          </div>
          </div>
      </section>
      <div class="next-page">
        <p>Consultez le menu : <a href="/menu">Cliquez ici</a></p>
      </div>
    </>
  );
}

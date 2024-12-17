import React from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import LogoFooter  from './LogoFooter'
import { NavLink } from 'react-router-dom';


function Footer() {
  const { theme, toggleTheme } = useTheme();



  return (
    <>
    <footer class="footer-section">
        <div class="container">
            {/* <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Nous trouver</h4>
                                <span>1010 Avenue, sw 54321, Chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Nous appeler</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Nous envoyer un email</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="footer-content pt-5 pb-5">
                <div class="row footer-cta">
                    <div class="col-xl-3 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <NavLink exact to="/">
                                    <LogoFooter theme={theme} />
                                </NavLink>
                            </div>
                            <div class="footer-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Suivez-nous</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Liens utiles</h3>
                            </div>
                            <ul>
                                <li><a href="#">Accueil</a></li>
                                <li><a href="#">À propos</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Nos services</a></li>
                                <li><a href="#">Équipe d'experts</a></li>
                                <li><a href="#">Contactez-nous</a></li>
                                <li><a href="#">Dernières nouvelles</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Engagement qualité</h3>
                            </div>
                            <ul >
                              <li class="d-flex">
                                <img loading="lazy" src="https://www.ticketmaster.fr/img/footer/billets.svg"/>
                                <div class="list-body">Billetterie 100% Officielle</div>
                              </li>
                              <li class="d-flex">
                                <img loading="lazy" src="https://www.ticketmaster.fr/img/footer/lock.svg"/>
                              <div class="list-body">Paiement 100% sécurisé <span lang="en">(Secure Internet Payment Services)</span></div>
                              </li>
                              <li class="d-flex">
                                <img loading="lazy" src="https://www.ticketmaster.fr/img/footer/logo-avis-verifies-64.png"/>
                              <div class="list-body"><a href="https://www.avis-verifies.com/avis-clients/ticketmaster.fr" rel="noopener" target="_blank">
                                <img alt="Avis vérifiés" loading="lazy" src="https://www.ticketmaster.fr/img/footer/avis-verifies-Logo-FR.svg" width={100}/></a></div>
                              </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Guinée ticket et vous</h3>
                            </div>
                            <ul class="list-1">
                              <li><a href="/fr/moncompte/commandes">Votre compte / Vos commandes</a></li>
                              <li><a href="/fr/moncompte/emails">Vos alertes et newsletters</a></li>
                              <li><a href="https://help.ticketmaster.fr/hc/fr" rel="noopener" target="_blank">Aide / FAQ / Contact</a></li>
                              <li><a href="/fr/glossaire/noms">Artistes</a> &amp; <a href="/fr/glossaire/lieux">Salles</a></li>
                              <li><a href="https://blog.ticketmaster.fr/" rel="noopener" target="_blank">Blog ticketmaster.fr</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="col-xl-3 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Abonnez-vous</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Ne manquez pas de vous abonner à nos nouveaux flux, veuillez remplir le formulaire ci-dessous.</p>
                            </div>
                            <div class="subscribe-form mt-4">
                                <form action="#">
                                    <input type="text" placeholder="Adresse e-mail"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>

            <div class=" pb-5">
                <div className='row'>
                    <div className='col-lg-3'>
                      <a className=' center-align-items' href="#" rel="noopener" target="_blank">
                        <img className='d-block mx-auto' loading="lazy" src="https://www.ticketmaster.fr/img/footer/Help-faq.svg" height={70}/>
                        <p className='text-center mt-3'>Aide / FAQ / Contact</p>
                        <p class=" text-center">Trouvez immédiatement des réponses à vos questions grâce à notre aide en ligne</p>
                      </a>
                    </div>

                    <div className='col-lg-3'>
                      <a className=' center-align-items' href="#" rel="noopener" target="_blank">
                        <img className='d-block mx-auto' loading="lazy" src="https://www.ticketmaster.fr/img/footer/Box-Office-Collection.svg" height={70}/>
                        <p className='text-center mt-3'>Retrait en magasin</p>
                        <p class=" text-center">Retirez gratuitement vos billets partout en France dans plus de 1600 points de vente</p>
                      </a>
                    </div>

                    <div className='col-lg-3'>
                      <a className=' center-align-items' href="#" rel="noopener" target="_blank">
                        <img className='d-block mx-auto' loading="lazy" src="https://www.ticketmaster.fr/img/footer/umbrella.svg" height={70}/>
                        <p className='text-center mt-3'>RAssurance annulation</p>
                        <p class=" text-center">Réservez vos billets en toute confiance et sérénité</p>
                      </a>
                    </div>

                    <div className='col-lg-3'>
                      <a className=' center-align-items' href="#" rel="noopener" target="_blank">
                        <img className='d-block mx-auto' loading="lazy" src="https://www.ticketmaster.fr/img/footer/CollectorTicket-fr.svg" height={70}/>
                        <p className='text-center mt-3'>Billetcollector™</p>
                        <p class=" text-center">Le billet souvenir pour tous les fans. Un produit exclusif Ticketmaster®</p>
                      </a>
                    </div>
                  </div>
            </div>
        </div>

        



       


        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Droits d'auteur &copy; 2018, Tous droits réservés <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Accueil</a></li>
                                <li><a href="#">Termes</a></li>
                                <li><a href="#">Confidentialité</a></li>
                                <li><a href="#">Politique</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
  );
}

export default Footer;

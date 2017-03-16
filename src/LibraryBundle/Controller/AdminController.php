<?php

namespace LibraryBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Description of AdminController
 *
 * @author sebastien
 * @Route("/administration")
 */
class AdminController extends Controller {

    /**
     * @Route("/")
     * @Method({"GET"})
     */
    public function getView() {
        return $this->render("default/admin/adminView.html.twig");
    }

}

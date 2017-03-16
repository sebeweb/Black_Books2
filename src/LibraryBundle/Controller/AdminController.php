<?php

namespace LibraryBundle\Controller;

use LibraryBundle\Entity\Copy;
use LibraryBundle\Entity\State;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

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
    /**
     * @Route("/copies/{id}/state")
     * @Method({"PUT"})
     */
    public function updateCopyState(Request $r, $id) {
        $copy = $this->getDoctrine()->getRepository(Copy::class)->find($id);
        $state = $this->getDoctrine()->getRepository(State::class)->find($r->get("stateId"));
        $em = $this->getDoctrine()->getManager();
        $copy->setState($state);
        $em->merge($copy);
        $em->flush();
        return new JsonResponse($copy);
    }

}

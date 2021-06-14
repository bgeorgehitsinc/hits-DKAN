<?php

namespace Drupal\common\Plugin\DkanApiDocs;

use Drupal\common\Plugin\DkanApiDocsBase;

/**
 * @DkanApiDocs(
 *  id = "common_dkan_api_docs",
 *  description = "whatever"
 * )
 */
class CommonApiDocs extends DkanApiDocsBase {

  /**
   * Um.
   *
   * @return string|false 
   */
  public function spec() {
    return $this->getDoc('common');
  }

}
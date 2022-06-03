/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

import BaseRoute from '../Abstract/BaseRoute';
import AesirxApiInstance from '../gateway/Instance';

/**
 * Class InvesterContactRoute extends BaseRoute
 */
class InvesterContactRoute extends BaseRoute {
  /**
   *
   * @param data
   */
  createInvesterContactRequest = (data) =>
    AesirxApiInstance.post(
      this.createRequestURL({
        option: 'invester_contact',
      }),
      data
    );
}

export default InvesterContactRoute;

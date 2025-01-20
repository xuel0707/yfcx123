import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import manage from './manage.vue';

type ManageComponentType = InstanceType<typeof manage>;

describe('manage', () => {
  let manage: ManageComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(manage, {
      global: {
        stubs: {
          'router-link': true,
        },
        provide: {
          homeService,
          authenticated,
          currentUsername,
        },
      },
    });
    manage = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(manage.authenticated).toBeFalsy();
    expect(manage.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(manage.authenticated).toBeTruthy();
    expect(manage.username).toBe('test');
  });

  it('should use manage service', () => {
    manage.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});

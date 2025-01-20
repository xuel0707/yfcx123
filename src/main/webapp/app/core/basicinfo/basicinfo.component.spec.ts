import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import basicinfo from './basicinfo.vue';

type HomeComponentType = InstanceType<typeof basicinfo>;

describe('basicinfo', () => {
  let basicinfo: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(basicinfo, {
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
    basicinfo = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(basicinfo.authenticated).toBeFalsy();
    expect(basicinfo.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(basicinfo.authenticated).toBeTruthy();
    expect(basicinfo.username).toBe('test');
  });

  it('should use basicinfo service', () => {
    basicinfo.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});

import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import results from './results.vue';

type HomeComponentType = InstanceType<typeof results>;

describe('results', () => {
  let results: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(results, {
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
    results = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(results.authenticated).toBeFalsy();
    expect(results.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(results.authenticated).toBeTruthy();
    expect(results.username).toBe('test');
  });

  it('should use results service', () => {
    results.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});

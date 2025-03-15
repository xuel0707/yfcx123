import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import export from './export.vue';

type HomeComponentType = InstanceType<typeof export>;

describe('export', () => {
  let export: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(export, {
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
    export = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(export.authenticated).toBeFalsy();
    expect(export.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(export.authenticated).toBeTruthy();
    expect(export.username).toBe('test');
  });

  it('should use export service', () => {
    export.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});

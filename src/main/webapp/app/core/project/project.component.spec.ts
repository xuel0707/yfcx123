import { vitest } from 'vitest';
import { ref } from 'vue';
import { shallowMount } from '@vue/test-utils';
import project from './project.vue';

type HomeComponentType = InstanceType<typeof project>;

describe('project', () => {
  let project: HomeComponentType;
  let authenticated;
  let currentUsername;
  const homeService = { openhome: vitest.fn() };

  beforeEach(() => {
    authenticated = ref(false);
    currentUsername = ref('');
    const wrapper = shallowMount(project, {
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
    project = wrapper.vm;
  });

  it('should not have user data set', () => {
    expect(project.authenticated).toBeFalsy();
    expect(project.username).toBe('');
  });

  it('should have user data set after authentication', () => {
    authenticated.value = true;
    currentUsername.value = 'test';

    expect(project.authenticated).toBeTruthy();
    expect(project.username).toBe('test');
  });

  it('should use project service', () => {
    project.openhome();

    expect(homeService.openhome).toHaveBeenCalled();
  });
});

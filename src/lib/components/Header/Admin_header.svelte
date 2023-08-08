<script>
  import IconBriefcase from "$components/Icons/icon_briefcase.svelte";
import IconFolder from "$components/Icons/icon_folder.svelte";
  import IconHelpCircle from "$components/Icons/icon_help-circle.svelte";
  import IconMedia from "$components/Icons/icon_media.svelte";
import IconPosts from "$components/Icons/icon_posts.svelte";
  import IconSettings from "$components/Icons/icon_settings.svelte";
import Logo from "$components/logo.svelte";
import {page} from '$app/stores'
  import AdminProfileAvatar from "./Admin_profile_avatar.svelte";

</script>


<aside>
    <div class="logo-container">
        <Logo mode='dark' />
    </div>
    <div class="profile">
        <AdminProfileAvatar/>
    </div>
    <nav class="main-navigation">
        <ul role="menu" aria-label="Dashboard Navigation">
            <!-- Posts -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin"}>
              <a href="/sa-admin"><IconPosts/> Posts</a>
            </li>
        
            <!-- Categories -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin/categories"}>
              <a href="/sa-admin/categories"><IconFolder/> Categories</a>
            </li>
        
            <!-- Services -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin/services"}>
              <a href="/sa-admin/services"><IconBriefcase/> Services</a>
            </li>
        
            <!-- FAQs -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin/faqs"}>
              <a href="/sa-admin/faqs"><IconHelpCircle/> FAQs</a>
            </li>
        
            <!-- Media Library -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin/media-library"}>
              <a href="/sa-admin/media-library"><IconMedia/> Media Library</a>
            </li>
        
            <!-- Settings -->
            <li role="menuitem" class:active={$page.url.pathname === "/sa-admin/settings"}>
              <a href="/sa-admin/settings"><IconSettings/> Settings</a>
            </li>
          </ul>
    </nav>
</aside>

<style lang="scss">
    aside {
        background-color: var(--color-admin-base);
        display: grid;
        justify-content: center;
        padding-top: var(--space-xl);
        padding-inline: var(--space-xl);
        gap: var(--space-xxl);
        grid-auto-rows: max-content;

        .logo-container, .profile {
            padding-inline: var(--space-xl);
        }


        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
            gap: var(--space-l);

            

            li {
                padding-inline: var(--space-xl);
                
                a {
                    color: rgb(255 255 255 / 90%);
                    font-size: var(--text-xs);
                    display: flex;
                    align-items: center;
                    gap: var(--space-base);
                    padding-block: var(--space-base);
                    width: 100%;
                }

                &.active {
                    background-color: rgb(255 255 255 / 20%);
                    border-right: 4px solid var(--color-system-blue);
                }

                &:hover {
                    background-color: var(--color-admin-base-dark);
                }
            }
        }
    }
</style>
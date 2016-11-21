### Build Stuff 2016 talk repo

#### Don't fear the devops - taming server infrastructure with Ansible

This repo contains complete source code together with required vagrant infrastructure to run ansible provisioning against. Follow the commits in order.

#### Install roles first

If you follow the repo commits reach commits that make use custom roles (nodejs, upstart etc), please install deps from `requirements.yml` file first using command line with: `ansible-galaxy install -r requirements.yml`. Otherwise you'll get error from Ansible.

#### Ansible Vault

This is just for demo purposes. **NEVER COMMIT YOUR VAULT PASSWORD FILES!!!**
 
Vault password is `KE9hC8AbEyubFY`.

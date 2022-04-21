import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

.navbar {
    background-color: #8da9c4;
}

.nav-link {
    font-size: 16px;
    color: #021F44 !important;
}

.navbar-nav {
    width: 100%;
    justify-content: space-evenly;
}

p {
    color: #021F44;
}

.btn-group {
    margin-left: 2em;
}

.btn-primary {
    background-color: #fff !important;
    border-color: #021F44 !important; 
    color: #021F44;

    &:hover {
        background-color: #021F44 !important;
        border-color: #021F44 !important; 
        color: #fff;
    }

    &:focus {
      box-shadow:none;
    }

    &:active {
      box-shadow:none;
    }
}


.icon-link-dark {
    color: #021F44; 

    &:hover {
        color: #021F44;
    }
}

.icon-size-30 {
    font-size: 30px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #8da9c4;
}

`
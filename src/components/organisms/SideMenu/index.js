import React from 'react'

const SideMenu = () => {
  return (
    <div> 
      <section id="sidebar">
            <a href="#" class="encabezado_sidebar"><img src="./imagenes/logo.png" alt="" width="53px" /> Técnología EDS</a>
            <ul class="menu">
                <li><a href="http://localhost/inventario/tablero" class="activo"><i class="fa-solid fa-calendar-days icono"></i> Dashboard</a></li>
                <li><a href="http://localhost/inventario/perfil"><i class="fa-solid fa-user-large icono"></i> Perfil </a></li>
                <li class="separar" data-text="Administrar Sistema">Administrar Sistema</li>
                <li>
                    <a href="#"><i class="fa-solid fa-users icono"></i> Personas <i class="fa-solid fa-angle-right icono-derecho"></i></a>
                    <ul class="sub-menu">
                        <li><a href="http://localhost/inventario/usuarios">Usuarios</a></li>
                        <li><a href="#">Badges</a></li>
                        <li><a href="#">Breadcrumbs</a></li>
                        <li><a href="#">Button</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa-solid fa-table icono"></i> Inventario <i class="fa-solid fa-angle-right icono-derecho"></i></a>
                    <ul class="sub-menu">
                        <li><a href="http://localhost/inventario/categoria-productos">Categoría de productos</a></li>
                        <li><a href="http://localhost/inventario/vistas/inventario/productos.php">Productos</a></li>
                        <li><a href="http://localhost/inventario/vistas/inventario/inventario.php">Inventario</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="fa-solid fa-bag-shopping icono"></i> Compras y ventas <i class="fa-solid fa-angle-right icono-derecho"></i></a>
                    <ul class="sub-menu">
                        <li><a href="http://localhost/inventario/vistas/movimiento/compra.php">Compras</a></li>
                        <li><a href="#">ventas</a></li>
                        <li><a href="#">Regalias</a></li>
                    </ul>
                </li>
                <li><a href="#"><i class="fa-solid fa-chart-pie icono"></i>Contabilidad</a></li>
                <li>
                    <a href="#"><i class="fa-solid fa-shield-halved icono"></i> Seguridad <i class="fa-solid fa-angle-right icono-derecho"></i></a>
                    <ul class="sub-menu">
                        <li><a href="#">Bitacora</a></li>
                        <li><a href="#">Parametros</a></li>
                        <li><a href="http://localhost/inventario/roles">Roles</a></li>
                        <li><a href="http://localhost/inventario/permisos">Permisos</a></li>
                    </ul>
                </li>
            </ul>
            
        </section>
    </div>
  );
};

export default SideMenu;


window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Biscolab" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab.html">Biscolab</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Biscolab_GoogleMaps" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps.html">GoogleMaps</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Biscolab_GoogleMaps_Abstracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Abstracts.html">Abstracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Abstracts_AbstractCollection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Abstracts/AbstractCollection.html">AbstractCollection</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Abstracts_AbstractObject" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Abstracts/AbstractObject.html">AbstractObject</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Abstracts_Api" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Abstracts/Api.html">Api</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Api" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Api.html">Api</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Api_Elevation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Api/Elevation.html">Elevation</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Api_Geocoding" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Api/Geocoding.html">Geocoding</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Enum" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Enum.html">Enum</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Enum_GoogleMapsApiConfigFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Enum/GoogleMapsApiConfigFields.html">GoogleMapsApiConfigFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Enum_GoogleMapsRequestMethodValues" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Enum/GoogleMapsRequestMethodValues.html">GoogleMapsRequestMethodValues</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Enum_GoogleMapsResponseFormat" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Enum/GoogleMapsResponseFormat.html">GoogleMapsResponseFormat</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Exception_Exception" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Exception/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Exception_InvalidArgumentException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Exception/InvalidArgumentException.html">InvalidArgumentException</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Exception_RequestException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Exception/RequestException.html">RequestException</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Exception_ResponseException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Exception/ResponseException.html">ResponseException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Fields" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Fields.html">Fields</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Fields_AddressComponentFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/AddressComponentFields.html">AddressComponentFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_GeometryFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/GeometryFields.html">GeometryFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_GoogleMapsRequestFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/GoogleMapsRequestFields.html">GoogleMapsRequestFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_GoogleMapsResponseFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/GoogleMapsResponseFields.html">GoogleMapsResponseFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_GoogleMapsResultFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/GoogleMapsResultFields.html">GoogleMapsResultFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_LatLngBoundsFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/LatLngBoundsFields.html">LatLngBoundsFields</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Fields_LatLngFields" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Fields/LatLngFields.html">LatLngFields</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Http" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Http.html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Biscolab_GoogleMaps_Http_Result" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Http/Result.html">Result</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Http_Result_ElevationResult" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/Result/ElevationResult.html">ElevationResult</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_Result_ElevationResultsCollection" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/Result/ElevationResultsCollection.html">ElevationResultsCollection</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_Result_GeocodingResult" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/Result/GeocodingResult.html">GeocodingResult</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_Result_GeocodingResultsCollection" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/Result/GeocodingResultsCollection.html">GeocodingResultsCollection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_GoogleMapsClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/GoogleMapsClient.html">GoogleMapsClient</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_GoogleMapsRequest" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/GoogleMapsRequest.html">GoogleMapsRequest</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_GoogleMapsResponse" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/GoogleMapsResponse.html">GoogleMapsResponse</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_GoogleMapsResult" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/GoogleMapsResult.html">GoogleMapsResult</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Http_GoogleMapsResultsCollection" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Http/GoogleMapsResultsCollection.html">GoogleMapsResultsCollection</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Object" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Object.html">Object</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Object_Address" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/Address.html">Address</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_AddressComponent" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/AddressComponent.html">AddressComponent</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_Geometry" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/Geometry.html">Geometry</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_LatLng" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/LatLng.html">LatLng</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_LatLngBounds" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/LatLngBounds.html">LatLngBounds</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_Location" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/Location.html">Location</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_Path" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/Path.html">Path</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Object_Viewport" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Object/Viewport.html">Viewport</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Biscolab_GoogleMaps_Values" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Biscolab/GoogleMaps/Values.html">Values</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Biscolab_GoogleMaps_Values_GeometryLocationTypeValues" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Values/GeometryLocationTypeValues.html">GeometryLocationTypeValues</a>                    </div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_Values_GoogleMapsResponseStatusValues" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/Values/GoogleMapsResponseStatusValues.html">GoogleMapsResponseStatusValues</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Biscolab_GoogleMaps_GoogleMapsApi" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Biscolab/GoogleMaps/GoogleMapsApi.html">GoogleMapsApi</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Biscolab.html", "name": "Biscolab", "doc": "Namespace Biscolab"},{"type": "Namespace", "link": "Biscolab/GoogleMaps.html", "name": "Biscolab\\GoogleMaps", "doc": "Namespace Biscolab\\GoogleMaps"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Abstracts.html", "name": "Biscolab\\GoogleMaps\\Abstracts", "doc": "Namespace Biscolab\\GoogleMaps\\Abstracts"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Api.html", "name": "Biscolab\\GoogleMaps\\Api", "doc": "Namespace Biscolab\\GoogleMaps\\Api"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Enum.html", "name": "Biscolab\\GoogleMaps\\Enum", "doc": "Namespace Biscolab\\GoogleMaps\\Enum"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Exception.html", "name": "Biscolab\\GoogleMaps\\Exception", "doc": "Namespace Biscolab\\GoogleMaps\\Exception"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Fields.html", "name": "Biscolab\\GoogleMaps\\Fields", "doc": "Namespace Biscolab\\GoogleMaps\\Fields"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Http.html", "name": "Biscolab\\GoogleMaps\\Http", "doc": "Namespace Biscolab\\GoogleMaps\\Http"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Http/Result.html", "name": "Biscolab\\GoogleMaps\\Http\\Result", "doc": "Namespace Biscolab\\GoogleMaps\\Http\\Result"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Object.html", "name": "Biscolab\\GoogleMaps\\Object", "doc": "Namespace Biscolab\\GoogleMaps\\Object"},{"type": "Namespace", "link": "Biscolab/GoogleMaps/Values.html", "name": "Biscolab\\GoogleMaps\\Values", "doc": "Namespace Biscolab\\GoogleMaps\\Values"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Abstracts", "fromLink": "Biscolab/GoogleMaps/Abstracts.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "doc": "&quot;Class AbstractCollection&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method___construct", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::__construct", "doc": "&quot;AbstractCollection constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_setItems", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::setItems", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_addItem", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::addItem", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_parseItem", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::parseItem", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_toArray", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_get", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::get", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_count", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::count", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_toJson", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::toJson", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method___toString", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_getLastIndex", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::getLastIndex", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_seek", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::seek", "doc": "&quot;Move the index at the specified position&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_position", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::position", "doc": "&quot;Return the current position of the index&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_current", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::current", "doc": "&quot;Return the current object&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_first", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::first", "doc": "&quot;Move index to first position and return current element&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractCollection.html#method_last", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractCollection::last", "doc": "&quot;Move index at the end of collection and return current element&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Abstracts", "fromLink": "Biscolab/GoogleMaps/Abstracts.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "doc": "&quot;Class AbstractObject&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method___construct", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::__construct", "doc": "&quot;AbstractObject constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_setArgs", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::setArgs", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_isFieldRequired", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::isFieldRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_addError", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::addError", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_parseFieldValue", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::parseFieldValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_throwErrors", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::throwErrors", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_toJson", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::toJson", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method_toArray", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method___toString", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject", "fromLink": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html", "link": "Biscolab/GoogleMaps/Abstracts/AbstractObject.html#method___call", "name": "Biscolab\\GoogleMaps\\Abstracts\\AbstractObject::__call", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Abstracts", "fromLink": "Biscolab/GoogleMaps/Abstracts.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api", "doc": "&quot;Class Api&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method___construct", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::__construct", "doc": "&quot;Api constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_getServiceConfig", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::getServiceConfig", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_getServiceEndpoint", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::getServiceEndpoint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_getGoogleMapsApi", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::getGoogleMapsApi", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_setGoogleMapsApi", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::setGoogleMapsApi", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_createRequest", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::createRequest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Abstracts\\Api", "fromLink": "Biscolab/GoogleMaps/Abstracts/Api.html", "link": "Biscolab/GoogleMaps/Abstracts/Api.html#method_getResultsCollections", "name": "Biscolab\\GoogleMaps\\Abstracts\\Api::getResultsCollections", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Api", "fromLink": "Biscolab/GoogleMaps/Api.html", "link": "Biscolab/GoogleMaps/Api/Elevation.html", "name": "Biscolab\\GoogleMaps\\Api\\Elevation", "doc": "&quot;Class Elevation&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Elevation", "fromLink": "Biscolab/GoogleMaps/Api/Elevation.html", "link": "Biscolab/GoogleMaps/Api/Elevation.html#method_getByLocations", "name": "Biscolab\\GoogleMaps\\Api\\Elevation::getByLocations", "doc": "&quot;Positional Requests&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Elevation", "fromLink": "Biscolab/GoogleMaps/Api/Elevation.html", "link": "Biscolab/GoogleMaps/Api/Elevation.html#method_parseLocations", "name": "Biscolab\\GoogleMaps\\Api\\Elevation::parseLocations", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Elevation", "fromLink": "Biscolab/GoogleMaps/Api/Elevation.html", "link": "Biscolab/GoogleMaps/Api/Elevation.html#method_getBySampledPath", "name": "Biscolab\\GoogleMaps\\Api\\Elevation::getBySampledPath", "doc": "&quot;Sampled Path Requests&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Api", "fromLink": "Biscolab/GoogleMaps/Api.html", "link": "Biscolab/GoogleMaps/Api/Geocoding.html", "name": "Biscolab\\GoogleMaps\\Api\\Geocoding", "doc": "&quot;Class Geocoding&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Geocoding", "fromLink": "Biscolab/GoogleMaps/Api/Geocoding.html", "link": "Biscolab/GoogleMaps/Api/Geocoding.html#method_getByAddress", "name": "Biscolab\\GoogleMaps\\Api\\Geocoding::getByAddress", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Geocoding", "fromLink": "Biscolab/GoogleMaps/Api/Geocoding.html", "link": "Biscolab/GoogleMaps/Api/Geocoding.html#method_getReverse", "name": "Biscolab\\GoogleMaps\\Api\\Geocoding::getReverse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Api\\Geocoding", "fromLink": "Biscolab/GoogleMaps/Api/Geocoding.html", "link": "Biscolab/GoogleMaps/Api/Geocoding.html#method_getByPlaceId", "name": "Biscolab\\GoogleMaps\\Api\\Geocoding::getByPlaceId", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Enum", "fromLink": "Biscolab/GoogleMaps/Enum.html", "link": "Biscolab/GoogleMaps/Enum/GoogleMapsApiConfigFields.html", "name": "Biscolab\\GoogleMaps\\Enum\\GoogleMapsApiConfigFields", "doc": "&quot;Class GoogleMapsApiConfigFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Enum", "fromLink": "Biscolab/GoogleMaps/Enum.html", "link": "Biscolab/GoogleMaps/Enum/GoogleMapsRequestMethodValues.html", "name": "Biscolab\\GoogleMaps\\Enum\\GoogleMapsRequestMethodValues", "doc": "&quot;Class GoogleMapsRequestMethodValues&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Enum", "fromLink": "Biscolab/GoogleMaps/Enum.html", "link": "Biscolab/GoogleMaps/Enum/GoogleMapsResponseFormat.html", "name": "Biscolab\\GoogleMaps\\Enum\\GoogleMapsResponseFormat", "doc": "&quot;Class GoogleMapsResponseFormat&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Exception", "fromLink": "Biscolab/GoogleMaps/Exception.html", "link": "Biscolab/GoogleMaps/Exception/Exception.html", "name": "Biscolab\\GoogleMaps\\Exception\\Exception", "doc": "&quot;Class Exception&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Exception", "fromLink": "Biscolab/GoogleMaps/Exception.html", "link": "Biscolab/GoogleMaps/Exception/InvalidArgumentException.html", "name": "Biscolab\\GoogleMaps\\Exception\\InvalidArgumentException", "doc": "&quot;Class InvalidArgumentException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Exception", "fromLink": "Biscolab/GoogleMaps/Exception.html", "link": "Biscolab/GoogleMaps/Exception/RequestException.html", "name": "Biscolab\\GoogleMaps\\Exception\\RequestException", "doc": "&quot;Class RequestException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Exception", "fromLink": "Biscolab/GoogleMaps/Exception.html", "link": "Biscolab/GoogleMaps/Exception/ResponseException.html", "name": "Biscolab\\GoogleMaps\\Exception\\ResponseException", "doc": "&quot;Class ResponseException&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/AddressComponentFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\AddressComponentFields", "doc": "&quot;Class AddressComponentFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/GeometryFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\GeometryFields", "doc": "&quot;Class GeometryFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/GoogleMapsRequestFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\GoogleMapsRequestFields", "doc": "&quot;Class GoogleMapsRequestFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/GoogleMapsResponseFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\GoogleMapsResponseFields", "doc": "&quot;Class GoogleMapsResponseFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/GoogleMapsResultFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\GoogleMapsResultFields", "doc": "&quot;Class GoogleMapsResponseFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/LatLngBoundsFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\LatLngBoundsFields", "doc": "&quot;Class LatLngBoundsFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Fields", "fromLink": "Biscolab/GoogleMaps/Fields.html", "link": "Biscolab/GoogleMaps/Fields/LatLngFields.html", "name": "Biscolab\\GoogleMaps\\Fields\\LatLngFields", "doc": "&quot;Class LatLngFields&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps", "fromLink": "Biscolab/GoogleMaps.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi", "doc": "&quot;Class GoogleMapsApi&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method___construct", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::__construct", "doc": "&quot;GoogleMapsApi constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getApiUrl", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getApiUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setKey", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getKey", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getKey", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setSensor", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setSensor", "doc": "&quot;Set sensor parameter&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getSensor", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getSensor", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setClient", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getClient", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getRequest", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getRequest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getServiceEndpoint", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getServiceEndpoint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setServiceEndpoint", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setServiceEndpoint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setType", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setType", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getUrl", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getUrl", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_setRequest", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::setRequest", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_getQuery", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::getQuery", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\GoogleMapsApi", "fromLink": "Biscolab/GoogleMaps/GoogleMapsApi.html", "link": "Biscolab/GoogleMaps/GoogleMapsApi.html#method_get", "name": "Biscolab\\GoogleMaps\\GoogleMapsApi::get", "doc": "&quot;Perform the Google Maps API call&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http", "fromLink": "Biscolab/GoogleMaps/Http.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html#method___construct", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient::__construct", "doc": "&quot;GeocoderClient constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html#method_setClient", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient::setClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsClient.html#method_get", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsClient::get", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http", "fromLink": "Biscolab/GoogleMaps/Http.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest", "doc": "&quot;Class GoogleMapsRequest&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html#method___construct", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest::__construct", "doc": "&quot;GoogleMapsRequest constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html#method_addParam", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest::addParam", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsRequest.html#method_getQuery", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsRequest::getQuery", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http", "fromLink": "Biscolab/GoogleMaps/Http.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "doc": "&quot;Class GoogleMapsResponse&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method___construct", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::__construct", "doc": "&quot;GoogleMapsResponse constructor.&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_setResponse", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::setResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_parseResponse", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::parseResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_checkHttpStatusCode", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::checkHttpStatusCode", "doc": "&quot;Check HTTP status code (silent\/No exceptions!)&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_toArray", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_getResults", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::getResults", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_setResults", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::setResults", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_getStatus", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::getStatus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_setStatus", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::setStatus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_getArrayResponse", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::getArrayResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_setArrayResponse", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::setArrayResponse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_getErrorMessage", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::getErrorMessage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_setErrorMessage", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::setErrorMessage", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResponse.html#method_getHttpStatusCode", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResponse::getHttpStatusCode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http", "fromLink": "Biscolab/GoogleMaps/Http.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResult.html", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResult", "doc": "&quot;Class GoogleMapsResult&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http", "fromLink": "Biscolab/GoogleMaps/Http.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResultsCollection.html", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResultsCollection", "doc": "&quot;Class GoogleMapsResultsCollection&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResultsCollection", "fromLink": "Biscolab/GoogleMaps/Http/GoogleMapsResultsCollection.html", "link": "Biscolab/GoogleMaps/Http/GoogleMapsResultsCollection.html#method_parseItem", "name": "Biscolab\\GoogleMaps\\Http\\GoogleMapsResultsCollection::parseItem", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http\\Result", "fromLink": "Biscolab/GoogleMaps/Http/Result.html", "link": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html", "name": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult", "doc": "&quot;Class ElevationResult&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html", "link": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html#method_setElevation", "name": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult::setElevation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html", "link": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html#method_setLocation", "name": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult::setLocation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html", "link": "Biscolab/GoogleMaps/Http/Result/ElevationResult.html#method_setResolution", "name": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResult::setResolution", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http\\Result", "fromLink": "Biscolab/GoogleMaps/Http/Result.html", "link": "Biscolab/GoogleMaps/Http/Result/ElevationResultsCollection.html", "name": "Biscolab\\GoogleMaps\\Http\\Result\\ElevationResultsCollection", "doc": "&quot;Class GeocodingResultsCollection&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http\\Result", "fromLink": "Biscolab/GoogleMaps/Http/Result.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "doc": "&quot;Class GeocodingResult&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_getAddress", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::getAddress", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_setAddressComponents", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::setAddressComponents", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_setFormattedAddress", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::setFormattedAddress", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_setGeometry", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::setGeometry", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_setPlaceId", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::setPlaceId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult", "fromLink": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResult.html#method_setTypes", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResult::setTypes", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Http\\Result", "fromLink": "Biscolab/GoogleMaps/Http/Result.html", "link": "Biscolab/GoogleMaps/Http/Result/GeocodingResultsCollection.html", "name": "Biscolab\\GoogleMaps\\Http\\Result\\GeocodingResultsCollection", "doc": "&quot;Class GeocodingResultsCollection&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/Address.html", "name": "Biscolab\\GoogleMaps\\Object\\Address", "doc": "&quot;Class Address&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\Address", "fromLink": "Biscolab/GoogleMaps/Object/Address.html", "link": "Biscolab/GoogleMaps/Object/Address.html#method_parseItem", "name": "Biscolab\\GoogleMaps\\Object\\Address::parseItem", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "doc": "&quot;Class AddressComponent&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_setLongName", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::setLongName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_setShortName", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::setShortName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_setTypes", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::setTypes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_getLongName", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::getLongName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_getShortName", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::getShortName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\AddressComponent", "fromLink": "Biscolab/GoogleMaps/Object/AddressComponent.html", "link": "Biscolab/GoogleMaps/Object/AddressComponent.html#method_getTypes", "name": "Biscolab\\GoogleMaps\\Object\\AddressComponent::getTypes", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/Geometry.html", "name": "Biscolab\\GoogleMaps\\Object\\Geometry", "doc": "&quot;Class Geometry&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\Geometry", "fromLink": "Biscolab/GoogleMaps/Object/Geometry.html", "link": "Biscolab/GoogleMaps/Object/Geometry.html#method_setLocation", "name": "Biscolab\\GoogleMaps\\Object\\Geometry::setLocation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\Geometry", "fromLink": "Biscolab/GoogleMaps/Object/Geometry.html", "link": "Biscolab/GoogleMaps/Object/Geometry.html#method_setViewport", "name": "Biscolab\\GoogleMaps\\Object\\Geometry::setViewport", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\Geometry", "fromLink": "Biscolab/GoogleMaps/Object/Geometry.html", "link": "Biscolab/GoogleMaps/Object/Geometry.html#method_setLocationType", "name": "Biscolab\\GoogleMaps\\Object\\Geometry::setLocationType", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html", "name": "Biscolab\\GoogleMaps\\Object\\LatLng", "doc": "&quot;Class LatLng&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLng", "fromLink": "Biscolab/GoogleMaps/Object/LatLng.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html#method_getLat", "name": "Biscolab\\GoogleMaps\\Object\\LatLng::getLat", "doc": "&quot;Return the latitude, 0 if null&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLng", "fromLink": "Biscolab/GoogleMaps/Object/LatLng.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html#method_getLng", "name": "Biscolab\\GoogleMaps\\Object\\LatLng::getLng", "doc": "&quot;Return the longitude, 0 if null&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLng", "fromLink": "Biscolab/GoogleMaps/Object/LatLng.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html#method___toString", "name": "Biscolab\\GoogleMaps\\Object\\LatLng::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLng", "fromLink": "Biscolab/GoogleMaps/Object/LatLng.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html#method_setLat", "name": "Biscolab\\GoogleMaps\\Object\\LatLng::setLat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLng", "fromLink": "Biscolab/GoogleMaps/Object/LatLng.html", "link": "Biscolab/GoogleMaps/Object/LatLng.html#method_setLng", "name": "Biscolab\\GoogleMaps\\Object\\LatLng::setLng", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/LatLngBounds.html", "name": "Biscolab\\GoogleMaps\\Object\\LatLngBounds", "doc": "&quot;Class LatLngBounds&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLngBounds", "fromLink": "Biscolab/GoogleMaps/Object/LatLngBounds.html", "link": "Biscolab/GoogleMaps/Object/LatLngBounds.html#method_setLat", "name": "Biscolab\\GoogleMaps\\Object\\LatLngBounds::setLat", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\LatLngBounds", "fromLink": "Biscolab/GoogleMaps/Object/LatLngBounds.html", "link": "Biscolab/GoogleMaps/Object/LatLngBounds.html#method_setLng", "name": "Biscolab\\GoogleMaps\\Object\\LatLngBounds::setLng", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/Location.html", "name": "Biscolab\\GoogleMaps\\Object\\Location", "doc": "&quot;Class Location&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/Path.html", "name": "Biscolab\\GoogleMaps\\Object\\Path", "doc": "&quot;Class Path&quot;"},
                                                        {"type": "Method", "fromName": "Biscolab\\GoogleMaps\\Object\\Path", "fromLink": "Biscolab/GoogleMaps/Object/Path.html", "link": "Biscolab/GoogleMaps/Object/Path.html#method_parseItem", "name": "Biscolab\\GoogleMaps\\Object\\Path::parseItem", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Object", "fromLink": "Biscolab/GoogleMaps/Object.html", "link": "Biscolab/GoogleMaps/Object/Viewport.html", "name": "Biscolab\\GoogleMaps\\Object\\Viewport", "doc": "&quot;Class Viewport&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Values", "fromLink": "Biscolab/GoogleMaps/Values.html", "link": "Biscolab/GoogleMaps/Values/GeometryLocationTypeValues.html", "name": "Biscolab\\GoogleMaps\\Values\\GeometryLocationTypeValues", "doc": "&quot;Class GeometryLocationTypeValues&quot;"},
                    
            {"type": "Class", "fromName": "Biscolab\\GoogleMaps\\Values", "fromLink": "Biscolab/GoogleMaps/Values.html", "link": "Biscolab/GoogleMaps/Values/GoogleMapsResponseStatusValues.html", "name": "Biscolab\\GoogleMaps\\Values\\GoogleMapsResponseStatusValues", "doc": "&quot;Class GoogleMapsResponseStatusValues&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});



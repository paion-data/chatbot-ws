/*
 * Copyright 2025 Jiaqi Liu. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.paiondata.chatbotws.web.endpoints;

import jakarta.inject.Singleton;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import net.jcip.annotations.Immutable;
import net.jcip.annotations.ThreadSafe;

/**
 * Endpoint that contains a basic sanity-check.
 */
@Singleton
@Immutable
@ThreadSafe
@Path("/healthcheck")
@Produces(MediaType.APPLICATION_JSON)
public class HealthcheckServlet {

    /**
     * A webservice sanity-check endpoint.
     *
     * @return 200 OK response
     */
    @GET
    public Response healthcheck() {
        return Response
                .status(Response.Status.OK)
                .build();
    }
}
